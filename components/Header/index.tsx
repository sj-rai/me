import Head from "next/head";
import Link from "next/link";
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
          <Link href="/">Home 🏠</Link>
          {/*<Link href="/notes">Notes 📝</Link>*/}
          <Link href="/about">About</Link>
          <Link href="/blogs">Blogs 🖥</Link>
          {/*<Link href="/playlist">Playlist 🎵</Link>*/}
          {/*<Link href="/rss-feed">RSS feed</Link>*/}
          {/*<Link href="/bookmarks">Bookmarks</Link>*/}
        </div>
      </>
    </Head>
  );
}
