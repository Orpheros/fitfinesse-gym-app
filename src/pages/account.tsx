import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import { Button, Modal, QRCode } from "antd";
import { useState } from "react";
import { Input } from "antd";
import { useAddGym } from "../hooks/gyms/useAddGyms";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../components/config/firebase-config";
import Swal from "sweetalert2";
import { createQuery } from "../helper/createQuery.helper";
import { useGetUserInfo } from "../hooks/user/useGetUserInfo";
import moment from "moment";
import { useGetGyms } from "../hooks/gyms/useGetGyms";
import LoadingPage from "../components/layout/loading";

const Account = () => {
  const { userData, loading } = useGetUserInfo();
  const { gyms } = useGetGyms();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenGym, setIsModalOpenGym] = useState(false);
  const photo = auth.currentUser?.photoURL;
  const [gymForm, setGymForm] = useState({
    gym_id: 0,
    gym_name: null,
    loyalty_point: null,
  });
  // const [formData, setFormData] = useState({
  //   gym_id: 2,
  //   gym_name: "Fithub",
  // });
  const formData = {
    gym_id: 2,
    gym_name: "Fithub",
  };

  // const handleTextAreaChange = (event: string) => {
  //   // setTextAreaValue(event);
  //   setFormData({ ...formData, ...JSON.parse(event) });
  // };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModalGym = () => {
    const a = useAddGym();
    console.log("a", a);
    setIsModalOpenGym(true);
  };
  const handleOkGym = () => {
    setIsModalOpenGym(false);
  };
  const handleCancelGym = () => {
    setIsModalOpenGym(false);
  };

  const downloadQRCode = () => {
    const canvas = document
      .getElementById("myqrcode")
      ?.querySelector<HTMLCanvasElement>("canvas");
    if (canvas) {
      const padding = 10;
      const size = canvas.width + padding * 2;

      const offScreenCanvas = document.createElement("canvas");
      offScreenCanvas.width = size;
      offScreenCanvas.height = size;
      const ctx = offScreenCanvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, size, size);

        ctx.drawImage(canvas, padding, padding);

        const url = offScreenCanvas.toDataURL();
        const a = document.createElement("a");
        a.download = "QRCode.png";
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  };

  const handleAddGym = (event: any) => {
    setGymForm({
      ...gymForm,
      [event.target.name]: event.target.value,
    });
  };

  // const { addExercise } = useAddExercises();

  // const addExerciseList = (event: any) => {
  //   const uploadExercises = async () => {
  //     for (const category in exercises) {
  //       for (const exercise of exercises[category]) {
  //         await addExercise({ category, exercise });
  //       }
  //     }
  //   };

  //   uploadExercises();
  // };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const nameCheckQuery = createQuery(
      "gyms",
      "gym_name",
      "==",
      gymForm.gym_name
    );
    const nameCheckSnapshot = await getDocs(nameCheckQuery);

    if (!nameCheckSnapshot.empty) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gym name already exists",
        timer: 2000,
      });
      return;
    }

    let gym_id = gymForm.gym_id;
    let gymExists = true;

    while (gymExists) {
      const docRef = createQuery("gyms", "gym_id", "==", gym_id);
      const querySnapshot = await getDocs(docRef);

      if (querySnapshot.empty) {
        gymExists = false;
      } else {
        gym_id = gym_id ? gym_id + 1 : 1;
      }
    }

    await addDoc(collection(db, "gyms"), {
      gym_id: gym_id,
      gym_name: gymForm.gym_name,
      loyalty_point: Number(gymForm.loyalty_point),
    });
    setGymForm({
      gym_id: 0,
      gym_name: null,
      loyalty_point: null,
    });
  };

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <Layout>
      <div className="container-fluid d-flex flex-column gap-3 py-2 px-4">
        <div
          className="d-flex justify-content-center align-items-center w-100"
          style={{ height: "25vh" }}
        >
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "12rem",
              height: "12rem",
            }}
          >
            <img
              src={photo || ""}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6 className="">Name : </h6>
            <p className="m-0">{userData.name ? userData.name : "-"}</p>
            <hr style={{ margin: "0.7rem 0" }} />
          </div>
          <div className="col-12">
            <h6 className="">Current gym : </h6>
            <p className="m-0">{gyms[0]?.gym_name ? gyms[0]?.gym_name : "-"}</p>
            <hr style={{ margin: "0.7rem 0" }} />
          </div>
          <div className="col-12">
            <h6 className="">Last QR scan : </h6>
            <p className="m-0">
              {userData.last_scan
                ? moment(userData.last_scan).format("dddd, D MMMM YYYY")
                : "-"}
            </p>
            <hr style={{ margin: "0.7rem 0" }} />
          </div>
        </div>
        {/* <TextArea
          rows={4}
          readOnly
          value={JSON.stringify(formData, null, 2)}
          onChange={(e) => handleTextAreaChange(e.target.value)}
        /> */}
        {/* <div>{result}</div> */}
        {/* <Button
          type="primary"
          block
          style={{ height: "3rem" }}
          onClick={addExerciseList}
        >
          Add Exercise List
        </Button> */}
        {userData.is_admin && (
          <>
            <Button
              type="primary"
              block
              style={{ height: "3rem" }}
              onClick={showModal}
            >
              Generate QR
            </Button>
            <Button
              type="primary"
              block
              style={{ height: "3rem" }}
              onClick={showModalGym}
            >
              Generate Gym
            </Button>
          </>
        )}

        <Modal
          title="Generate QR"
          centered
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <div className="d-flex justify-content-center" id="myqrcode">
            <div>
              <QRCode
                value={JSON.stringify(formData)}
                bgColor="#fff"
                style={{ marginBottom: 16 }}
              />
              <div className="d-flex justify-content-center">
                <Button type="primary" onClick={downloadQRCode}>
                  Download
                </Button>
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          title="Generate QR"
          centered
          open={isModalOpenGym}
          onOk={handleOkGym}
          onCancel={handleCancelGym}
          width={1000}
        >
          <form onSubmit={handleSubmit}>
            <div className="pb-2">
              <label>Gym Name</label>
              <Input
                name="gym_name"
                onChange={handleAddGym}
                value={gymForm.gym_name || ""}
                placeholder="Gym name"
              />
            </div>
            <div className="pb-2">
              <label>Loyalty Point</label>
              <Input
                name="loyalty_point"
                onChange={handleAddGym}
                value={gymForm.loyalty_point || ""}
                placeholder="Point value"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </form>
        </Modal>
        <Button className="" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Layout>
  );
};

export default Account;
