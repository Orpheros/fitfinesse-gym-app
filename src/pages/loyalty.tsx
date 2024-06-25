// import Reader from "react-qr-scanner";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import Footer from "../components/layout/footer";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useGetGyms } from "../hooks/gyms/useGetGyms";
import LoadingPage from "../components/layout/loading";
import { useGetGymExercises } from "../hooks/gyms/useGetGymsExercises";
import { handleScan } from "../hooks/user/useScanLoyalty";
import Swal from "sweetalert2";
import { useGetUserInfo } from "../hooks/user/useGetUserInfo";
import { DynamicSteps } from "../components/component/dynamic-steps.component";

const LoyaltyPage = () => {
  const [result, setResult] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dailyScan, setDailyScan] = useState(false);
  // const [loyaltyProgress, setLoyaltyProgress] = useState([]);
  // const [currentLoyaltyProgress, setCurrentLoyaltyProgress] = useState(0);
  const { loading } = useGetGymExercises();
  const { gyms } = useGetGyms();
  const { userData } = useGetUserInfo();
  const [userGym, setUserGym] = useState<any>({});
  const specialSteps = [
    { index: 5, title: "Pocary" },
    { index: 10, title: "Baju" },
    { index: 15, title: "Discount 10% Food" },
  ];

  useEffect(() => {
    if (gyms.length > 0) {
      setUserGym(gyms[0]);
    }
  });

  // const handleScan = (result: any) => {
  //   if (result && !dailyScan) {
  //     try {
  //       const res = JSON.parse(result);
  //       console.log("aaaaa", res);
  //       if (res.amount === 1) {
  //         setcurrentLoyaltyProgress((prevProgress) => prevProgress + 1);
  //       }
  //       setResult(result);
  //       setDailyScan(true);
  //     } catch (error) {
  //       console.error("Invalid JSON format:", error);
  //     }
  //   }
  // };

  const handleScanRes = async (qrData: any) => {
    if (!dailyScan) {
      try {
        const res = await handleScan(
          userData.user_id,
          qrData,
          userGym.gym_name
        );
        setResult(res.message);
        if (res.isError) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: res.message,
            allowOutsideClick: false,
            allowEscapeKey: false,
          }).then((res) => {
            if (res.isConfirmed) {
              window.location.reload();
            }
          });
        }
        if (res.message === "Loyalty point added") {
          Swal.fire({
            icon: "success",
            text: res.message,
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          // setCurrentLoyaltyProgress((prevProgress) => prevProgress + 1);
        }
        setDailyScan(true);
      } catch (error) {
        console.error("Error scanning QR code:", error);
        setResult("Error scanning QR code");
      }
    }
  };

  const handleError = (result: any) => {
    console.log(result);
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

  if (loading) {
    return <LoadingPage loading={loading} />;
  }

  return (
    <>
      <div className="h-100">
        <div className="d-flex flex-column align-items-center">
          <QrScanner
            audio={false}
            scanDelay={2000}
            onDecode={handleScanRes}
            // onResult={handleScanRes}
            onError={handleError}
            containerStyle={{
              objectFit: "cover",
              height: "80vh",
            }}
          />
        </div>
        <div
          className="container-fluid d-flex gap-3 py-2"
          style={{
            marginBottom: "5rem",
          }}
        >
          {/* <div>{result}</div> */}
          <Button
            type="primary"
            block
            style={{ height: "3rem" }}
            onClick={showModal}
          >
            View Loyalty Points
          </Button>
          <Modal
            title={`${userGym.gym_name} Progress -   ${
              userData.loyalty_points ? userData.loyalty_points : "0"
            } / ${userData.max_progress ? userData.max_progress : "-"}`}
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            style={{ height: "50vh" }}
          >
            <div style={{ maxHeight: "calc(50vh - 55px)", overflowY: "auto" }}>
              <DynamicSteps
                userData={userData}
                maxSteps={userData.max_progress}
                specialSteps={specialSteps}
              />
            </div>
          </Modal>
        </div>
        <div>{result}</div>
        <Footer />
      </div>
    </>
  );
};

export default LoyaltyPage;
