interface Props {
  backgroundPath?: string;
  label?: string;
}

const CurrentPlanComponent: React.FC<Props> = ({ backgroundPath, label }) => {
  return (
    <div
      className="d-flex w-100"
      style={{
        filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      <div
        className="w-100"
        style={{
          borderRadius: "16px",
          flexShrink: 0,
          background: `url(${backgroundPath}) lightgray 50% / cover no-repeat`,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          minHeight: "99px",
        }}
      >
        <span
          style={{
            paddingBottom: "18px",
            paddingTop: "18px",
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "45px",
            pointerEvents: "none",
            textShadow: "2px 2px 4px black",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default CurrentPlanComponent;
