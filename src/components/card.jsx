import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const cardTexts = [
  "Explora destinos increíbles y vive nuevas aventuras.",
  "Descubre consejos y trucos para llevar tu vida al siguiente nivel.",
  "Obtén las últimas noticias y tendencias en tecnología.",
  "Conéctate con una comunidad apasionada por el aprendizaje.",
];

const MyCard = () => {
  return (
    <div className="d-flex flex-wrap">
      {cardTexts.map((text) => {
        return (
          <>
            <Card className="mx-auto my-3 p-0 col-3" style={{ width: "18rem" }}>
              <Card.Img src="https://placehold.co/500x325" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">Find Out More!</Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default MyCard;
