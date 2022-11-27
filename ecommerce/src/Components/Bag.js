import { useContext } from "react";
import { Store } from "../Store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";
import ListGroup from "react-bootstrap/ListGroup";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DeleteIcon from '@mui/icons-material/Delete';

function Bag() {
  const { state, ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ padding: "50px" }}>Shopping cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <h1>
              No Items in Cart.<a onClick={()=>navigate('/')}>Go Shopping</a>
            </h1>
          ) : (
            <ListGroup>
              {cartItems.map((items) => (
                <Card style={{ padding: "20px",margin:'20px' }}>
                  <ListGroup.Item key={items._id}>
                    <Row className="align-items-center">
                      <Col md={2}>
                        <img
                          style={{ height: "150px" }}
                          src={items.image}
                          className="image-fluid rounded img-thumbnail"
                        ></img>{" "}
                      </Col>
                      <Col md={2}>
                        <span>{items.input.quantity}</span>{" "}
                      </Col>
                      <Col md={2}>
                        <span>{items.input.color}</span>{" "}
                      </Col>
                      <Col md={2}>
                        <span>{items.input.size}</span>{" "}
                      </Col>
                      <Col md={2}>
                        <span>Rs{items.price}</span>{" "}
                      </Col>
                      <Col md={2}>
                        <Button variant="light">
                            <DeleteIcon></DeleteIcon>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </Card>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
            <Card style={{ padding: "20px",margin:'20px' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item >
                        <h3>
                            Subtotal ({cartItems.reduce((a,c)=> a + parseInt(c.input.quantity),0)}{' '}
                            items) : Rs  
                            {cartItems.reduce((a,c) => a + (parseInt(c.price) * parseInt(c.input.quantity)),0)}
                        </h3>
                    </ListGroup.Item>
                    <ListGroup.Item >
                        <div className="d-grid">
                            <Button
                            type="button"
                            disabled={cartItems.length === 0}
                            style={{background:"rgba(232,28,101,0.83)"}}>
                                Proceed To Checkout  
                            </Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Bag;