import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/layout";
import { Button, Modal, QRCode } from "antd";
import { useState } from "react";
import { Input } from "antd";

const Account = () => {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  // destinatary: "KWIK-E-MART",
  //             dynamic: false,
  //             amount: 1500
  const [formData, setFormData] = useState({
    id: 1,
    name: "FTL_Gym",
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
      </div>
      <Button className="ms-lg-4 ms-3 me-lg-3 me-2" onClick={handleLogout}>
        Logout
      </Button>
    </Layout>
  );
};

export default Account;
