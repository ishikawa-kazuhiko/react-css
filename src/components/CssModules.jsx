import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>-css Modules-</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
