import { useState } from "react";
import Layout from "../components/layout/layout";
import LoadingPage from "../components/layout/loading";
import { useGetExpense } from "../hooks/useGetExpense";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { format } from "../helper/formating-helper";
import { Pagination } from "antd";

const ExpenseList = () => {
  const { transactions, loading } = useGetExpense();
  const [page, setPage] = useState(3);
  const [current, setCurrent] = useState(0);
  const handleChangePage = (e: any) => {
    const currentPage = page * e;
    console.log("curr page", currentPage);
    setCurrent(page);
    setPage(currentPage);
  };

  return (
    <>
      {!loading ? (
        <Layout>
          <div className="d-flex justify-content-center">
            <div className="mt-4">
              <div className="d-flex justify-content-between">
                <h4>Transactions</h4>
              </div>
              <div
                className="container-fluid"
                style={{ paddingBottom: "90px" }}
              >
                {transactions.slice(current, page).map((transaction: any) => {
                  const { description, amount, expense_type, create_date } =
                    transaction;
                  return (
                    <div
                      className="card shadow border-0 mb-3 px-4"
                      style={{ background: "#F5F7F8", borderRadius: "15px" }}
                      key={transaction.id}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col-2">
                            <div
                              className="card d-flex justify-content-center border-0 shadow"
                              style={{ height: "44px", width: "44px" }}
                            >
                              <FontAwesomeIcon icon={faMoneyBill} size="lg" />
                            </div>
                          </div>
                          <div className="col-10 align-items-center d-flex">
                            <div className="d-flex justify-content-between w-100">
                              <div>
                                <h6
                                  className="mb-0 d-inline-block text-truncate"
                                  style={{ maxWidth: "130px" }}
                                >
                                  {description}
                                </h6>
                                <p
                                  className="mb-0"
                                  style={{ fontSize: "13px", color: "gray" }}
                                >
                                  {format.date(create_date)}
                                </p>
                              </div>
                              <div className="d-flex align-items-center">
                                Rp.&nbsp;
                                <p
                                  className={`mb-0 ${
                                    expense_type === "income"
                                      ? "text-success"
                                      : "text-danger"
                                  }`}
                                >
                                  {format.formatNumber(amount)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="d-flex justify-content-center ">
                  <Pagination
                    defaultCurrent={1}
                    total={14}
                    defaultPageSize={page}
                    onChange={handleChangePage}
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <LoadingPage loading={loading} />
      )}
    </>
  );
};

export default ExpenseList;
