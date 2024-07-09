import Navbar from "../components/Navbar";
import ShopPage from "../components/ShopPage";
import Likes from "../components/Likes";
import BestSellers from "../components/BestSellers";
import Explore from "../components/Explore";

export default function Home() {
    return (
        <div>
            <Navbar />
            <ShopPage />
            <Likes />
            <BestSellers />
            <Explore />
        </div>
    )
};
