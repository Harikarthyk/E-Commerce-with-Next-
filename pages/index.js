import Head from 'next/head';
import Layout from "../components/Layout";

export default function Home() {
  return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <div style={{
              width : '100%' , 
              minHeight : "250px",
              display :"flex",
              justifyContent : "center",
              alignItems: "center"
            }}> 
              <p>This is Home Page</p>
            </div>
        </Layout>
      </>
  )
}