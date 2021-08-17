import Navbar from '../components/Navbar';
import Head from 'next/head';
import Header from '../components/Header';
import Layout from '../components/Layout';
function about() {
    return (
        <div>
            <Head>
                <title>About Page</title>
                <meta name="description" content="About Page" />
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
              <p>E-Commerce Application with Next JS</p>
            </div>
        </Layout>
        </div>
    )
}

export default about
