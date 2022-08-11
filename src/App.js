import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncActions/customers";
import {
  addCustomerAction,
  deleteCustomerAction,
} from "./store/CustomerReducer";
function App() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.PointReducer.points);
  const customers = useSelector((state) => state.CustomerReducer.customers);
  const addPoint = (point) => {
    dispatch({ type: "ADD_POINT", payload: point });
  };

  const crushPoint = (point) => {
    dispatch({ type: "CRUSH_POINT", payload: point });
  };
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id));
  };
  return (
    <div className="App">
      <div>
        <div style={{ fontSize: "20px" }}>{points}</div>
        <button onClick={() => addPoint(Number(prompt()))}>Add Point</button>
        <button onClick={() => crushPoint(Number(prompt()))}>
          Crush Point
        </button>
        <button onClick={() => addCustomer(prompt())}>Add Object</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить юзеров из базы
        </button>
      </div>
      <div>
        {customers.length ? (
          customers.map((customer) => {
            return (
              <div
                onClick={() => {
                  deleteCustomer(customer);
                }}
                // key={customer.id}
              >
                {customer.name}{" "}
              </div>
            );
          })
        ) : (
          <div> Нет объектов </div>
        )}
      </div>
    </div>
  );
}

export default App;
