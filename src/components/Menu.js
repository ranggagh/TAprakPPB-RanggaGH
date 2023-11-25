import Menu1 from "../assets/florida.jpeg";
import Menu2 from "../assets/wiseman.jpeg";
import Menu3 from "../assets/alabama.jpeg";
import "./MenuStyles.css";
import DataMenu from "./DataMenu";
import goToDetail from "../routes/Favorite";
const Menu = () => {
    return (
        <div className="menu">
            <h1>Best Cocktail in The World</h1>

            <DataMenu
                className="first-menu"
                heading="Florida Bushwacker"
                text="Bushwacker adalah salah satu dari sedikit koktail yang dapat diklaim Florida sebagai miliknya dengan sedikit inspirasi dan tiruan pulau. Bushwacker asli ditemukan oleh bartender Angie Conigliaro dan manajer bar Tom Brokamp pada tahun 1975 di Ship's Store Pub di St. Thomas di Kepulauan Virgin AS sebagai nuansa tropis dari White Russian. Itu dinamai dari seekor anjing yang sangat besar bernama Bushwack, yang menghabiskan beberapa hari di bar sementara pemiliknya minum cocktail. "
                img1={Menu1} 
                id="14588" 
            />

            <DataMenu
                className="first-menu-reverse"
                heading="Wise Men"
                text="Wise Men adalah minuman yang terdiri dari tiga jenis wiski dengan nama merek yang dinamai menurut nama laki-laki (Johnnie Walker, Jack Daniel, dan Jim Beam). Meskipun secara informal disebut cocktail, namun tidak memenuhi definisi dari istilah cocktail karena hanya mengandung wiski tanpa bahan lain."
                img1={Menu2}
                id="13899"
            />

            <DataMenu
                className="first-menu"
                heading="Alabama Slammer"
                text="Ia dicipta pada suatu masa apabila para bartender mencampurkan beberapa minuman yang sangat kuat, sangat manis dan bahkan SoCo dan slo slo yang digunakan di sini tidak melihat banyak digunakan seperti yang mereka pernah. Ia adalah minuman sampingan yang baik."
                img1={Menu3}
                id="11012"
            />
        </div>
    );
};

export default Menu;