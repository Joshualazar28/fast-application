import React from "react";


// ------------using React Bootstrap---------------
import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";


// ----------------- Using Functioal Component--------------------


function Checkout() {
    return (
        <>

        // --------shopping bar--------------------

            <Row className="" style={{ height: "80px", color: 'grey' }}>
                <Col className="d-flex justify-content-center align-items-center mt-5">
                    <h2>
                        SHOPPING CART <BsArrowRight />{" "}
                        <span style={{ color: "red" }}>
                            CHECKOUT <BsArrowRight />
                        </span>{" "}
                        ORDER COMPLETE
                    </h2>
                </Col>
            </Row>






            <Row className="d-flex justify-content-center mt-5">
                <Col className="col-6  mt-5">
                    <Row>
                        <Col>
                            <h3 className="mt-4">BILING DETAILS</h3>
                            <div className="d-flex justify-content-between">


                            // -------------inputs--------------

                                <input
                                    type="text"
                                    placeholder="First Name*"
                                    style={{ width: "48%", marginTop: "20px" }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    style={{ width: "48%", marginTop: "20px" }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="COMPANY NAME (optional)"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Country / Region"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Street Address"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Town / City"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="State / Country (optional)"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                style={{ marginTop: "20px", width: "100%" }}
                            />
                            <input
                                type="text"
                                placeholder="Order Notes (optional)"
                                style={{ marginTop: "20px", width: "100%", height: "150px" }}
                            />
                        </Col>
                    </Row>
                </Col>
                // -----------right side content box--------------------
                <Col
                    className="col-3 ml-5 mt-5"
                    style={{ background: "#eee" }}
                >
                    <div className="mt-5" style={{ height: "300px", marginTop: "15px" }}>
                        <h3 style={{ textAlign: "center" }}>YOUR ORDER</h3>
                        <div
                            style={{
                                background: "#fff",
                                height: "200px",
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "column",
                                marginTop: "15px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",

                                }}
                            >
                                <h5>PRODUCT</h5>
                                <h5>SUBTOTAL</h5>
                            </div>
                            <div
                                style={{
                                    display: "flex",

                                    justifyContent: "space-between",
                                }}
                            >
                                <p>Decdeal Disposable</p>
                                <p>$53.33</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",

                                    justifyContent: "space-between",
                                }}
                            >
                                <p>Subtotal</p>
                                <p>$53.33</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",

                                    justifyContent: "space-between",
                                }}
                            >
                                <p>Shipping</p>
                                <p>$53.33</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",

                                    justifyContent: "space-between",
                                }}
                            >
                                <h5>TOTAL</h5>
                                <h5>$63.99</h5>
                            </div>
                        </div>
                        <h5
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            Direct Band Transfer
                        </h5>
                        <div
                            style={{
                                background: "#fff",
                                height: "110px",
                                textAlign: "start",
                                marginTop: "15px",
                            }}
                        >
                            <p className="p-1">
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account
                            </p>
                        </div>
                        <h5
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            Cash On Delivery
                        </h5>
                        <div
                            style={{
                                background: "#fff",
                                height: "50px",
                                textAlign: "start",
                                marginTop: "15px",
                            }}
                        >
                            <p className="p-1">
                                Pay with cash upon delivery.
                            </p>
                        </div>
                        <p
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                            <span style={{ color: "green" }}> privacy policy.</span>
                        </p>
                        <p
                            style={{
                                marginTop: "15px",
                            }}
                        >
                            I have read and agree to the website
                            <span style={{ color: "black" }}>terms and conditions *</span>
                        </p>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit border btn " value="PLACE ORDER" />
                        </div>
                    </div>
                </Col>
                <Row>
                    <Col className=" mr-5 mar ">
                        <div
                            style={{
                                width: "650px",
                                marginLeft: "140px",
                                marginTop: "30px",

                            }}>
                            <h3>SHIPPING TO A DIFFERENT ADDRESS</h3>
                            <div className="d-flex justify-content-between">


                            // --------------inputs----------------

                                <input
                                    type="text"
                                    placeholder="First Name*"
                                    style={{ width: "60%", marginTop: "20px", marginLeft: "-150px" }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    style={{ width: "60%", marginTop: "20px", marginLeft: "-100px" }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="COMPANY NAME (optional)"
                                style={{ marginTop: "20px", width: "123%", marginLeft: "-150px" }}
                            />
                            <input
                                type="text"
                                placeholder="Country / Region"
                                style={{ marginTop: "20px", width: "123%", marginLeft: "-150px" }}
                            />
                            <input
                                type="text"
                                placeholder="Street Address"
                                style={{ marginTop: "20px", width: "123%", marginLeft: "-150px" }}
                            />
                            <input
                                type="text"
                                placeholder="Town / City"
                                style={{ marginTop: "20px", width: "123%", marginLeft: "-150px" }}
                            />
                            <input
                                type="text"
                                placeholder="State / Country (optional)"
                                style={{ marginTop: "20px", width: "123%", marginLeft: "-150px" }}
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                style={{ marginTop: "20px", width: "123%", marginLeft: "-150px" }}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                style={{ marginTop: "20px", width: "123%", marginLeft: "-150px" }}
                            />
                        </div>
                    </Col>
                </Row>
            </Row>


        </>
    );
}

export default Checkout;