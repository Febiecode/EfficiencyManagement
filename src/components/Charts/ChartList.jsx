
import LineChart from "./LineChart";
import BarChart from "./BarChart"
import PieChart from "./PieChart";
const ChartList = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                <div className="col-span-1">
                    <BarChart />
                </div>
                <div className="col-span-1">
                    <PieChart />
                </div>
                <div className="col-span-1">
                    <LineChart />
                </div>
            </div>
        </>
    )
}

export default ChartList;