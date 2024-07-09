import Navbar from "../components/Navbar";
import ShopPage from "../components/ShopPage";
import Likes from "../components/Likes";
import BestSellers from "../components/BestSellers";
import Explore from "../components/Explore";
import Trending from "../components/Trending";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";
import AllCart from "../components/AllCart";

export default function Home() {
    return (
        <div>
            <Navbar />
            <ShopPage />
            <Likes />
            <BestSellers />
            <Explore />
            <Trending />
            <AllProducts />
            <Footer />
            <AllCart />
        </div>
    )
};
