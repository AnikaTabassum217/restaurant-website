import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import SideNavigation from './components/SideNavigation';
import { Col, Row } from "reactstrap";
import RegistrationForm from './components/RegistrationForm';

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>
      {/* <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row> */}
      <RegistrationForm></RegistrationForm>
      <div style={styles.contentDiv}>
        <SideNavigation></SideNavigation>
        <div style={styles.contentMargin}>
          <h1 style={{ padding: "20%" }}>This is Content Area</h1>
        </div>
      </div>
    </>
  );
}

export default App;
