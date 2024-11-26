import MyCard from "../components/card.jsx";
import MyNavBar from "../components/navBar.jsx";
import Jumbotron from "../components/jumbotron.jsx";
import { Container } from "react-bootstrap";
import Footer from "../components/footer.jsx";

const Landingpage = () => {
  return (
    <>
      <MyNavBar />
      <Container>
        <Jumbotron />
        <MyCard />
      </Container>
      <Footer />
    </>
  );
};

export default Landingpage;
