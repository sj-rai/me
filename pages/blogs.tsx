import React from "react";
import styles from "../styles/Home.module.css";
import blogStyles from "../styles/blogs.module.css";
import Layout from "../components/Layout";

export default function Notes() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={`${blogStyles.blogsContainer} ${blogStyles.title}`}>
          <h1>Blogs</h1>
        </div>
        <div className={blogStyles.blogsContainer}>
          <h3>TS, TSX, JS, JSX all that</h3>
        </div>
        <div className={blogStyles.blogsContainer}>
          <h3>next/babel issue</h3>
        </div>
        <div className={blogStyles.blogsContainer}>
          <h3>Having babel config causes the issue with `no filename specified`, no config works. Also, next11 does not work whatsoever</h3>
        </div>
      </div>
    </Layout>
  );
}
