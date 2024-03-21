import logo from "./logo.svg";
import "./App.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import { blog } from "./Data/block";

function App() {
  let headerInfo = {
    email: "vikas!@gmail.com",
    phone: "35465465461",
  };

  

  return (
    <div>
      {/* <Header email="abcd@gmail.com" phone="12366545666"/> */}
      {/* <Header headerInfo={headerInfo} c="hello"/> */}
      {/* <Header headerInfo={headerInfo} c="hello">
        <h3> Accessing children props</h3>
      </Header>
      <h1>Vikas</h1> */}

      <Container>
        <Row>
          <Col>
            {blog.map((v, i) => {
              return( <ProductItems pitems={v} key={i}/>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

function ProductItems({pitems}) {
  return (
    <div className="col-lg-3 mb-4">
      <Card >
        <div class="card-body">
          <h5 class="card-title">{pitems.title}</h5>
          <p class="card-text">
            {pitems.body}
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Card>
    </div>
  );
}
