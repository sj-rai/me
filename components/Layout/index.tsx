import Header from "../Header";
// import styles from "./layout.module.scss";

const Layout = (props: any) => (
  <div className="Layout">
    {/*<div className={styles.nav}>*/}
    {/*    <Header />*/}
    {/*</div>*/}
    <Header />
    <div className="Content">{props.children}</div>
  </div>
);
export default Layout;
