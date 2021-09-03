import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style/styles.css"

function Cardcontent() {
  return (
    <div>
      <h1>Card Group</h1>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
          />
          <Card.Body>
            <Card.Title>Nama Makanan</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
          />
          <Card.Body>
            <Card.Title>Nama Makanan</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://uploads.codesandbox.io/uploads/user/b9762b2a-c02e-47af-9907-cc058f6734d1/t18f-reactjs%20-%20Copy.jpg"
          />
          <Card.Body>
            <Card.Title>Nama Makanan</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Cardcontent;
