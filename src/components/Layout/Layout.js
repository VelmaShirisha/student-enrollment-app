import { Fragment } from "react";

import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>STUDENT ENROLLMENT APP</div>
      </header>
      <main className={classes.main}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;