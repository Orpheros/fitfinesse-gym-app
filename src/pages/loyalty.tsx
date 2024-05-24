// import Reader from "react-qr-scanner";
import { useState } from "react";
import { Button, Modal, Steps } from "antd";
import Footer from "../components/layout/footer";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useGetUser } from "../hooks/useGetUser";

const LoyaltyPage = () => {
  const [result, setResult] = useState("");
  const { last_login } = useGetUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dailyScan, setDailyScan] = useState(false);
  const [loyaltyProgress, setLoyaltyProgress] = useState([]);
  const [currentLoyaltyProgress, setcurrentLoyaltyProgress] = useState(0);

  const handleScan = (result: any) => {
    if (result && !dailyScan) {
      try {
        const res = JSON.parse(result);
        console.log("aaaaa", res);
        if (res.amount === 1) {
          setcurrentLoyaltyProgress((prevProgress) => prevProgress + 1);
        }
        setResult(result);
        setDailyScan(true);
      } catch (error) {
        console.error("Invalid JSON format:", error);
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

  return (
    <>
      <div className=" h-100">
        <div className="d-flex flex-column align-items-center">
          <QrScanner
            audio={false}
            scanDelay={2000}
            onDecode={handleScan}
            // onResult={handleScan}
            onError={handleError}
            containerStyle={{
              objectFit: "cover",
              height: "100%",
            }}
          />
          {/* <Reader
            style={{
              objectFit: "cover",
              height: "80vh",
              width: "100%",
              // zoom: "200%",
            }}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
          /> */}
        </div>
        <div className="container-fluid d-flex gap-3 py-2">
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
            title="Basic Modal"
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
          >
            <Steps
              size="small"
              current={currentLoyaltyProgress}
              direction="horizontal"
              items={[
                {
                  title: "Finished",
                },
                {
                  title: "In Progress",
                },
                {
                  title: "Waiting",
                },
                {
                  title: "",
                },
                {
                  title: "",
                },
                {
                  title: "",
                },
              ]}
            />
          </Modal>
        </div>
        <div>{result}</div>
        <div>Last login : {last_login}</div>
        <Footer />
      </div>
    </>
  );
};

export default LoyaltyPage;
