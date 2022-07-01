import classes from "./Exchange2.module.scss";


function Exchange2({from, to, rate}) {

  return ( 
    <div className={classes.Exchange2}>
      {/* <h2>
        {from}/{to} = {rate}
      </h2> */}

      <div className={classes.table}>
        <h2  className={classes.th}>
          {from} / {to}
        </h2>
        <section>
          {rate.toFixed(2)}
        </section>
      </div>
    </div>
  );
}

export default Exchange2;