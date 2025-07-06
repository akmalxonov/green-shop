import Form from "./form";
import Totol from "./totol";
import "../checkoutCopm/checkout.scss"
const CheckoutComp = () => {
    return (
        <div className="checkout">
            <div className="container">
                <div className="wrapper">
                    <Form/>
                    <Totol/>
                </div>
            </div>
        </div>
    );
}

export default CheckoutComp;
