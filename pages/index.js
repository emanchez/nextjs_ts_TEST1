import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styled from "styled-components";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import TsComponent, { College } from "../components/component";
import { genRanHex, genFaculty, genStudent } from "../components/gen";
import { abc } from "../components/st_c";
import { initDB } from "../components/db";

export default function Home({ allPostsData }) {
  const MyTitle = styled.h1`
    font-siize: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const MyDiv = styled.div`
    padding: 4em;
    background: MidnightBlue;
  `;
  initDB();

  return (
    <>
      <h1>HI</h1>
      <h4>{abc("a")}</h4>
      <MyDiv>
        <MyTitle>Yo!</MyTitle>
      </MyDiv>
    </>
  );
  // return (
  //   <div>
  //     <Layout home>
  //       <Head>
  //         <title>{siteTitle}</title>
  //       </Head>
  //       <section className={utilStyles.headingMd}>
  //         <p>yo!</p>
  //         <p>
  //           (This is a sample website - you’ll be building a site like this in{" "}
  //           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
  //         </p>
  //       </section>
  //       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
  //         <h2 className={utilStyles.headingLg}>Blog</h2>
  //         <ul className={utilStyles.list}>
  //           {allPostsData.map(({ id, date, title }) => (
  //             <li className={utilStyles.listItem} key={id}>
  //               <Link href={`/posts/${id}`}>
  //                 <a>{title}</a>
  //               </Link>
  //               <br />
  //               <small className={utilStyles.lightText}>
  //                 <Date dateString={date} />
  //               </small>
  //             </li>
  //           ))}
  //         </ul>
  //       </section>
  //     </Layout>
  //     <TsComponent stri="input"></TsComponent>
  //   </div>
  // );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
