import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css"
export default function Custom404() {
    return (
        <Layout>
            <div className={`${styles.container} ${styles.title}`}>
                <h6>404 - Page Not Found</h6>
            </div>
        </Layout>
    )
}