import {Col,Container,Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Footer from "../components/footer"; 

function Error(){
    return(
        <main>
            <Container fluid className="error-s1 min-vh-100 d-flex align-items-center py-5">
                <Row className="w-100 mx-0">
                    <Col xs={8} md={6} className="text-start">
                        <h1 className="display-3 text-brown-light fw-bold">
                            Error 404
                        </h1>
                        <h2 className="display-6 text-brown-light">
                            Page not found
                        </h2>
                        <div className="w-100 py-3">
                            <Link to="/" className="btn btn-outline-light border-brown-light text-brown-light rounded-pill">
                                Back to <span className="fw-bold">Home</span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </main>
    );
}

export default Error;

