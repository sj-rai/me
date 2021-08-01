import Head from "next/head";
import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <Head>
      <>
        <div className={styles.navigation}>
          {/*<div id="blog"><a href="#">Blog </a></div>*/}
          {/*<div className={"blogs"}><a href="/blogs">Blogs </a></div>*/}
          {/*<div className={"notes"}><a href="/notes">Notes </a></div>*/}
          <a className={"notes"} href="/notes">
            Notes 📝
          </a>
          <a className={"blogs"} href="/blogs">
            Blogs 🖥
          </a>
          <a className={"playlist"} href="/playlist">
            Playlist 🎵
          </a>
          <a className={"rss"} href="/rss-feed">
            RSS feed{" "}
          </a>
          <a className={"bookmarks"} href="/bookmarks">
            Bookmarks{" "}
          </a>
        </div>
      </>
    </Head>
  );
}
