import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import CardContainer from "./Components/CardContainer";
import { message, Alert, Spin } from "antd";
import "antd/dist/antd.css";
const baseURL = "https://api.coingecko.com/api/v3/";

function App() {
  useEffect(() => {
    axios
      .get(baseURL + "coins/markets", {
        params: {
          vs_currency: "EUR",
        },
      })
      .then(response => {
        setCoinsList(response.data);
        setLoading(false);
      });
  }, []);

  const [coinsList, setCoinsList] = useState([]);
  const [showCoin, setShowCoin] = useState(false);
  const [coin, setCoin] = useState({});
  const [coinId, setCoinId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const clickHandler = id => {
    setLoading(true);
    axios
      .get(baseURL + `coins/${id}`)
      .then(response => {
        setLoading(false);
        setCoin(response.data);
        setShowCoin(true);
        setErrorMessage("");
        message.success({
          content: `market_cap_rank : ${response.data.market_cap_rank}`,
          className: "custom-class",
          style: {
            marginTop: "20px",
          },
        });
        setTimeout(() => {
          setCoin({});
          setShowCoin(false);
        }, 20000);
      })
      .catch(error => {
        setErrorMessage(error.message);
        console.log("There is some error", error);
      });
  };

  return (
    <div className="App">
      {loading && (
        <div className="example">
          <Spin className="spinner" />
        </div>
      )}
      {errorMessage.length > 1 && (
        <Alert
          message="Error"
          description={errorMessage}
          type="error"
          showIcon
        />
      )}
      {coinsList.map(e => (
        <CardContainer key={e.id} coin={e} clickHandler={clickHandler} />
      ))}
    </div>
  );
}

export default App;
