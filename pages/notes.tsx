import React from "react";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Notes() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={"Notes"}>
          <h2>Notes</h2>
        </div>
      </div>
    </Layout>
  );
}
