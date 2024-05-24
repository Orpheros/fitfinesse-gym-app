import React from "react";
import { FaFire } from "react-icons/fa6";

interface Props {
  backgroundPath: string;
  style?: React.CSSProperties;
  label: string;
  i1?: boolean;
  i2?: boolean;
  i3?: boolean;
  i4?: boolean;
  i5?: boolean;
  i6?: boolean;
  i7?: boolean;
  onClick?: () => void;
}

// src/assets/img/image3.jpg, 9.65rem
const ExerciseCardComponent: React.FC<Props> = ({
  backgroundPath,
  style,
  label,
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  onClick,
}) => {
  return (
    <div
      style={{
        borderRadius: "16px",
        height: "16rem",
        backgroundPosition: "50% 30%",
        background: `url(${backgroundPath}) 100% / cover no-repeat, #E2EEFF`,
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      onClick={onClick}
    >
      <div className="h-100 d-flex flex-column justify-content-between">
        <div
          style={{
            background: "#E2EEFF",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "8px",
            margin: "10px",
            alignSelf: "flex-start",
          }}
        >
          {i1 && (
            <FaFire
              style={{
                fontSize: "1.4rem",
                justifyContent: "center",
                margin: "5px",
              }}
            />
          )}
        </div>
        <div
          className="text-white mt-auto"
          style={{
            alignSelf: "flex-end",
            margin: "auto",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              pointerEvents: "none",
              textShadow: "2px 2px 4px black",
            }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCardComponent;
