import Form from "./form";
import "../checkoutCopm/checkout.scss"
import Total from "./total";
const CheckoutComp = () => {
    return (
        <div className="checkout">
            <div className="container">
                <div className="wrapper">
                    <Form/>
                    <Total/>
                </div>
            </div>
        </div>
    );
}

export default CheckoutComp;
