import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="container border border-primary rounded">
                            <div className="item p-3 d-flex flex-row">
                                
                                <div className = "d-flex flex-row">
                                    <img src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="img-fluid rounded" alt="" style = {{width : "8rem", height : "8rem", objectFit : "cover"}} />
                                    <div className = "itemDetails d-flex flex-column" >
                                        <h5 className = "ms-3" >Product Name</h5>
                                        <p className = "ms-3" >Brand</p>
                                        <p className = "ms-3" >$100</p>
                                    </div>
                                </div>

                                <div className = "quantity" >
                                    select
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        gfjghfj
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
