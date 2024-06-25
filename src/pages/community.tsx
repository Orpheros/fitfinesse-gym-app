import { useState } from "react";
import Layout from "../components/layout/layout";
import { useGetGyms } from "../hooks/gyms/useGetGyms";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { blue } from "../components/interface/user.interface";
import { GrGroup } from "react-icons/gr";
import { Carousel, CarouselProps, Drawer } from "antd";
import styled from "styled-components";

const CarouselWrapper = styled(Carousel)<CarouselProps>`
  > .slick-dots li button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: black;
    border: 1px;
  }
  > .slick-dots li.slick-active button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: blue;
  }
  > .carousel-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  > .carousel-wrapper .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > .carousel-wrapper .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CommunityPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const { gymsList } = useGetGyms();

  const handleNavigate = (gymId: string) => {
    navigate(`/community/${gymId}`);
  };

  // if (loading) return <LoadingPage />;

  const contentStyle: React.CSSProperties = {
    height: "250px",
    color: "#fff",
    textAlign: "center",
    justifyContent: "center",
    background: "#364d79",
  };

  return (
    <>
      <Layout>
        <div className="d-flex justify-content-center">
          <div
            className="containter-fluid mt-4 justify-content-center"
            style={{ width: "90%" }}
          >
            <section className="mb-3">
              <h6 className="mb-2">News</h6>
              <CarouselWrapper autoplay className="border rounded">
                <div>
                  <img
                    src="src/assets/img/carousel/carousel1.png"
                    alt=""
                    style={contentStyle}
                  />
                </div>
                <div>
                  <img
                    src="src/assets/img/carousel/carousel2.png"
                    alt=""
                    style={contentStyle}
                  />
                </div>
                <div>
                  <img
                    src="src/assets/img/carousel/carousel3.png"
                    alt=""
                    style={contentStyle}
                  />
                </div>
              </CarouselWrapper>
            </section>
            <section
              className="d-flex justify-content-between"
              onClick={showDrawer}
            >
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <div
                    className="border p-2 me-3"
                    style={{ borderRadius: "100%" }}
                  >
                    <GrGroup
                      size={30}
                      style={{
                        color: blue,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h6>Open Chat</h6>
                  <span>
                    {gymsList.length > 3
                      ? `${gymsList
                          .slice(0, 3)
                          .map((gym: any) => gym.gym_name)
                          .join(", ")} ...`
                      : gymsList.map((gym: any) => gym.gym_name).join(", ")}
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <IoIosArrowForward size={20} style={{ color: blue }} />
              </div>
            </section>
          </div>
        </div>
        <Drawer
          bodyStyle={{ padding: 12 }}
          title="Open Chat"
          onClose={onClose}
          open={open}
          width="100vw"
          placement="left"
          zIndex={9999}
        >
          <div className="row">
            {gymsList.map((gym: any, index) => (
              <div key={index} className="mb-3">
                <div
                  className="card h-100 m-0"
                  onClick={() => handleNavigate(gym.gym_id)}
                >
                  <div className="card-body d-flex align-items-center justify-content-start">
                    {gym.gym_name ? gym.gym_name : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Drawer>
        {/* <div className="container mt-4" style={{ width: "90%" }}>
            <div className="row">
              {gymsList.map((gym: any, index) => (
                <div key={index} className="col-6 col-md-6 mb-4">
                  <div
                    className="card h-100 m-0"
                    onClick={() => handleNavigate(gym.gym_id)}
                  >
                    <div className="card-body d-flex align-items-center justify-content-center">
                      {gym.gym_name ? gym.gym_name : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
      </Layout>
    </>
  );
};

export default CommunityPage;
