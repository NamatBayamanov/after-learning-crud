import { useEffect, useState } from "react";
import Exchange2 from "./Exchange2/Exchange2";
import classes from "./Exchange.module.scss";


function Exchange() {
  const [rates, setRates] = useState([]);

  const [baseCurrency, setBaseCurrency] = useState("KGS");

  function onChangeRates(event) {
    fetch(`http://www.floatrates.com/daily/${baseCurrency}.json`).then((response) => response.json()).then((data) => setRates(data));
  }

  const output = Object.values(rates).map((currentValue, index, arr) => (
    <Exchange2 key={currentValue.numericCode} from={baseCurrency} to={currentValue.code} rate={currentValue.inverseRate}/>
  ));

  useEffect(() => onChangeRates, [setRates]);

  function  onChangeRate(event) {
    setBaseCurrency(event.target.value);
  }
  return ( 
    <div className={classes.Exchange}>
      <input type="text" maxLength={3} onChange={onChangeRate} value={baseCurrency} className={classes.input}/>
      <button onClick={onChangeRates}>
        Update
      </button>
      <article className={classes.article}>
        {output}
      </article>
      
    </div>
  );
}

export default Exchange;