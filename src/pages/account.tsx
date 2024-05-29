import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import { Button, Modal, QRCode } from "antd";
import { useState } from "react";
import { Input } from "antd";
import { useAddGym } from "../hooks/gyms/useAddGyms";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../components/config/firebase-config";
import { set } from "firebase/database";
import Swal from "sweetalert2";
import { createQuery } from "../helper/createQuery.helper";

const Account = () => {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenGym, setIsModalOpenGym] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [gymForm, setGymForm] = useState({
    gym_id: 0,
    gym_name: null,
    loyalty_point: null,
  });
  const [formData, setFormData] = useState({
    gym_id: 1,
    gym_name: "FTL Gym",
    loyalty_point: 1,
  });

  const handleTextAreaChange = (event: string) => {
    // setTextAreaValue(event);
    setFormData({ ...formData, ...JSON.parse(event) });
  };
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

  // const handleAddGym = async (event: any) => {
  //   event.preventDefault();

  //   let gym_id = gymForm.gym_name;
  //   let gymExists = true;
  //   let docRef;

  //   while (gymExists) {
  //     docRef = query(collection(db, "gyms"), where("gym_id", "==", gym_id));
  //     const querySnapshot = await getDocs(docRef);

  //     if (querySnapshot.empty) {
  //       gymExists = false;
  //     } else {
  //       gym_id = incrementGymId(gym_id);
  //     }
  //   }

  //   await addDoc(collection(db, "gyms"), {
  //     gym_id: gym_id,
  //     gym_name: gymForm.gym_name,
  //     loyalty_point: gymForm.loyalty_point,
  //   });
  // };

  // const incrementGymId = (gym_id: any) => {
  //   let id_number = parseInt(gym_id.match(/\d+$/)[0], 10);
  //   let id_string = gym_id.replace(/\d+$/, "");
  //   id_number++;
  //   return id_string + id_number;
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

  return (
    <Layout>
      <div className="container-fluid d-flex flex-column gap-3 py-2">
        {/* <TextArea
          rows={4}
          value={textAreaValue}
          onChange={(e) => handleTextAreaChange(e.target.value)}
        /> */}
        <TextArea
          rows={4}
          readOnly
          value={JSON.stringify(formData, null, 2)}
          onChange={(e) => handleTextAreaChange(e.target.value)}
        />
        {/* <div>{result}</div> */}
        <Button
          type="primary"
          block
          style={{ height: "3rem" }}
          onClick={showModal}
        >
          Generate QR
        </Button>
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
        <Button
          type="primary"
          block
          style={{ height: "3rem" }}
          onClick={showModalGym}
        >
          Generate Gym
        </Button>
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
      </div>
      <Button className="ms-lg-4 ms-3 me-lg-3 me-2" onClick={handleLogout}>
        Logout
      </Button>
    </Layout>
  );
};

export default Account;
