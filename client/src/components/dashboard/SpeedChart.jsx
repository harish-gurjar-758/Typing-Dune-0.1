import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    { name: "Test1", wpm: 40 },
    { name: "Test2", wpm: 55 },
    { name: "Test3", wpm: 65 },
];

export default function SpeedChart() {
    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="wpm" stroke="#FF7A00" />
        </LineChart>
    );
}