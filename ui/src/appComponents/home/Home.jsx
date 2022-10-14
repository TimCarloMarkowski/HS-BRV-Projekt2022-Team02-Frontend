import "./home.scss";
import Sidebar from "../sidebar/Sidebar";
import TableSales from "../tableComponents/TableSales";
import PolarAreaChart from "../chartComponents/PolarAreaChart";
import ButtonsComponent from "../chartComponents/ButtonsComponent";

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <h1 className="top">Bachelorprojekt Hochschule Bremerhaven</h1>
                <div className="charts">
                    <ButtonsComponent />
                    <PolarAreaChart />
                </div>
                <div className="chartBottom">
                    <TableSales/>
                </div>
            </div>
        </div>
    )
}
export default Home;