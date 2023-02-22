import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Porforlio from "../components/Porforlio";
const HomePage = () =>{
    return`
${Header()}
${Banner()}
${Porforlio()}
${Footer()}

    `
}
export default HomePage;