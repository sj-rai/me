import Head from 'next/head'
import React from 'react';
import styles from './header.module.css'

export default function Header() {
    return (
        <Head>
            <>
                <div className={styles.navigation} >
                    {/*<div id="blog"><a href="#">Blog </a></div>*/}
                    {/*<div className={"blogs"}><a href="/blogs">Blogs </a></div>*/}
                    {/*<div className={"notes"}><a href="/notes">Notes </a></div>*/}
                    <a className={"notes"} href="#">Notes 📝</a>
                    <a className={"blogs"} href="#">Blogs 🖥</a>
                    <a className={"playlist"} href="#">Playlist 🎵</a>
                    <a className={"rss"} href="#">RSS feed </a>
                    <a className={"bookmarks"} href="#">Bookmarks </a>
                </div>
            </>
        </Head>
    );
}