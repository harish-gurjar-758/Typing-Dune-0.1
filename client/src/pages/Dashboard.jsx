import SpeedChart from "../components/dashboard/SpeedChart";

export default function Dashboard() {
    return (
        <div className="p-10">
            <h2 className="text-3xl mb-8">Your Performance</h2>
            <SpeedChart />
        </div>
    );
}