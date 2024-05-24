import Layout from "../components/layout/layout";
import { useGetExpense } from "../hooks/useGetExpense";
import { format } from "../helper/formating-helper";
import LoadingPage from "../components/layout/loading";
import { useGetUser } from "../hooks/useGetUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// https://colorhunt.co/palette/f5f7f8f4ce14495e5745474b
const ExpenseTracker = () => {
  const { transactions, loading, totalTransactions } = useGetExpense();
  const { name } = useGetUser();
  const { balance } = totalTransactions;

  return (
    <>
      {!loading ? (
        <Layout>
          <div className="d-flex justify-content-center">
            <div className="m-3">
              <div>
                <h4>Expense Tracker</h4>
                <div
                  className="card shadow border-0"
                  style={{ background: "#45474B", borderRadius: "15px" }}
                >
                  <div className="card-body text-white">
                    <p className="mb-0" style={{ color: "#F4CE14" }}>
                      Total balance
                    </p>
                    {balance >= 0 ? (
                      <h2>Rp. {format.formatNumber(balance) || 0}</h2>
                    ) : (
                      <h2>-Rp. {format.formatNumber(balance * -1) || 0}</h2>
                    )}
                    <p className="mb-0  mt-4">{name}</p>
                    <div className="text-white d-flex align-items-center justify-content-between">
                      <div className="d-flex">
                        <p className="mb-0 me-lg-5 me-5">5123 1235 8299 2029</p>
                      </div>
                      <img
                        className="ms-5"
                        style={{ width: "50px", height: "50px" }}
                        src="https://www.mastercard.com/content/dam/public/brandcenter/assets/images/logos/mclogo-for-footer.svg"
                        alt="new"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <h4>Transactions</h4>
                  <Link to="/expense-tracker-list" className="navbar-brand">
                    <p>View Detailed</p>
                  </Link>
                </div>
                {transactions.slice(0, 5).map((transaction: any) => {
                  const { description, amount, expense_type, create_date } =
                    transaction;
                  return (
                    <div
                      className="card shadow border-0 mb-2"
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
                {/* <div
                  className="card shadow border-0 mt-3"
                  style={{ background: "#45474B", borderRadius: "15px" }}
                >
                  <div className="card-body text-white">
                    <p className="mb-0" style={{ color: "#F4CE14" }}>
                      Expense
                    </p>
                    <h2>Rp. {format.formatNumber(totalExpense)}</h2>
                    <hr />
                    {transactions.map((transaction: any) => {
                      const { description, amount, expense_type } = transaction;
                      if (expense_type == "expense") {
                        return (
                          <div
                            className="d-flex justify-content-between"
                            key={transaction.id}
                          >
                            <p>{description}</p>
                            <p>Rp {format.formatNumber(amount)}</p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div> */}
              </div>

              {/* <div className="m-3 mt-5">
                <h4>Transactions</h4>
                <div
                  className="card shadow border-0"
                  style={{ background: "#45474B", borderRadius: "15px" }}
                >
                  <div className="card-body text-white">
                    <p className="mb-0" style={{ color: "#F4CE14" }}>
                      Income
                    </p>
                    <h2>Rp. {format.formatNumber(totalIncome)}</h2>
                    <hr />
                    {transactions.map((transaction: any) => {
                      const { description, amount, expense_type } = transaction;
                      if (expense_type == "income") {
                        return (
                          <div
                            className="d-flex justify-content-between"
                            key={transaction.id}
                          >
                            <p>{description}</p>
                            <p>Rp {format.formatNumber(amount)}</p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div
                  className="card shadow border-0 mt-3"
                  style={{ background: "#45474B", borderRadius: "15px" }}
                >
                  <div className="card-body text-white">
                    <p className="mb-0" style={{ color: "#F4CE14" }}>
                      Expense
                    </p>
                    <h2>Rp. {format.formatNumber(totalExpense)}</h2>
                    <hr />
                    {transactions.map((transaction: any) => {
                      const { description, amount, expense_type } = transaction;
                      if (expense_type == "expense") {
                        return (
                          <div
                            className="d-flex justify-content-between"
                            key={transaction.id}
                          >
                            <p>{description}</p>
                            <p>Rp {format.formatNumber(amount)}</p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </Layout>
      ) : (
        <LoadingPage loading={loading} />
      )}
    </>
  );
};

export default ExpenseTracker;
