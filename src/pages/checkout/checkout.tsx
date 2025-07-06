import CheckoutComp from "../../components/checkoutCopm";
import Footer from "../../components/footer";
import Modals from "../../components/modals";
import Navbar from "../../components/navbar";

const Checkout = () => {
    return (
        <div>
            <Navbar/>
            <CheckoutComp/>
            <Modals/>
            <Footer/>
        </div>
    );
}

export default Checkout;
