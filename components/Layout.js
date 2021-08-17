import Header from "./Header";
import Footer from "./Footer";
import { Container } from 'react-bootstrap'

const layoutStyle = {
};

const contentStyle = {
  // display : "flex",
  // width : "100%",
  // alignItems :"center",
  // justifyContent :"center",
  // backgroundColor : "red",
};

const Layout = props => (
  <div className="Layout" fluid="md" style={layoutStyle}>
    <Header />
    <Container style={contentStyle}>
      {props.children}
    </Container>
    <Footer />
  </div>
);

export default Layout;