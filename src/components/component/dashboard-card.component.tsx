import React from "react";
import { DashboardChart } from "../../assets/img/dashboard-chart";
import { FaFire } from "react-icons/fa6";
import { FaHeartbeat, FaWalking } from "react-icons/fa";
import { RiPinDistanceFill } from "react-icons/ri";

interface Props {
  color: string;
  text: string;
  i1?: boolean;
  i2?: boolean;
  i3?: boolean;
  i4?: boolean;
}

const DashboardCardComponent: React.FC<Props> = ({
  color,
  text,
  i1,
  i2,
  i3,
  i4,
}) => {
  return (
    <div className="card d-flex" style={{ borderRadius: "8px" }}>
      <div className="card-body">
        <div
          className="d-flex flex-column flex-start"
          style={{
            gap: "7px",
            alignSelf: "stretch",
          }}
        >
          <div className="d-flex gap-1 justify-content-center">
            <div
              className="d-flex align-items-center align-items-stretch gap-3 rounded"
              style={{
                background: "white",
                boxShadow: "0px 0px 4px 0px rgba(184, 244, 224, 0.60)",
              }}
            >
              <div
                className="rounded"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  padding: "3px",
                  margin: "4px",
                  background: "#E2EEFF",
                }}
              >
                {i1 && <FaFire style={{ fontSize: "1rem", color: color }} />}
                {i2 && <FaWalking style={{ fontSize: "1rem", color: color }} />}
                {i3 && (
                  <RiPinDistanceFill
                    style={{ fontSize: "1rem", color: color }}
                  />
                )}
                {i4 && (
                  <FaHeartbeat style={{ fontSize: "1rem", color: color }} />
                )}
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span
                className="m-0"
                style={{
                  fontSize: "0.8rem",
                  color: "gray",
                }}
              >
                {text}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <span style={{ fontSize: "1.5rem" }}>175</span>
          </div>
          <div className="d-flex justify-content-center">
            <DashboardChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCardComponent;
