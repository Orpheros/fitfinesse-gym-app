import Layout from "../components/layout/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import { useAddExpense } from "../hooks/useAddExpense";
import LoadingPage from "../components/layout/loading";

const ExpenseCreate = () => {
  const navigate = useNavigate();
  const [expense, setExpense] = useState("");
  const [description, setDescription] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [loading, setLoading] = useState(false);

  const { addExpense } = useAddExpense();

  useEffect(() => {
    setExpenseType("income");
  }, [setExpenseType]);

  const onSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    try {
      if (expense && description && expense) {
        // console.log(Number(expense));
        addExpense({
          description,
          amount: Number(expense),
          expense_type: expenseType,
        }).then(() => {
          navigate("/expense-tracker");
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  // const handleNumChange = (event: any) => {
  //   if (!isNaN(event.target.value)) {
  //     const str = event.target.value.replace(/\,/g, "");
  //     console.log("asdasd", str);
  //     setExpense(str);
  //   }
  // };
  const handleExpense = (event: any) => {
    setExpense(event.target.value);
  };
  // const handleBlur = (event: any) => {
  //   setExpense(format.formatNumber(event.target.value));
  // };
  // const handleFocus = (event: any) => {
  //   setExpense(format.unformat(event.target.value));
  // };
  const handleTypeChange = (value: string) => {
    setExpenseType(value);
  };

  return (
    <>
      {!loading ? (
        <Layout>
          <div className="d-flex justify-content-start align-items-center ms-4 mt-0 mb-0">
            <Button
              shape="circle"
              className="border-0 shadow-none"
              style={{ background: "#F5F7F8" }}
              onClick={() => navigate("/expense-tracker")}
            >
              <FontAwesomeIcon icon={faLessThan} />
            </Button>
            <div>
              <div className="m-3">
                <h4>Add amount</h4>
              </div>
            </div>
          </div>
          <div className="m-4 mt-0 mb-0">
            <form>
              <div className="d-flex justify-content-center align-items-center">
                <div className="px-4">
                  <div className="d-flex">
                    <div className="d-flex align-items-end">
                      <p className="mb-0">Rp</p>
                    </div>
                    <input
                      onChange={handleExpense}
                      className="form-control form-control-lg border-0 bg-transparent"
                      type="text"
                      placeholder="0"
                    />
                  </div>
                  <hr className="mt-2" />
                </div>
              </div>
              <div className="mt-5">
                <div className="w-50">
                  <label>Choose type</label>
                  <div className="d-flex flex-column mt-3">
                    <Select
                      defaultValue={"income"}
                      onChange={handleTypeChange}
                      options={[
                        { value: "income", label: "Income" },
                        { value: "expense", label: "Expense" },
                      ]}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label>Description</label>
                  <TextArea
                    className="mt-3"
                    maxLength={100}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ height: 120, resize: "none" }}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <Button
                  onClick={onSubmit}
                  type="primary"
                  className="w-100"
                  size={"large"}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Layout>
      ) : (
        <LoadingPage loading={loading} />
      )}
    </>
  );
};

export default ExpenseCreate;
