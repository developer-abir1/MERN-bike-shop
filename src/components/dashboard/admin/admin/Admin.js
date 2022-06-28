
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ProductAnalyics from '../productAnalyics/ProductAnalyics';


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
const Admin = () => {
    //  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';
    return (
        <div className="container">
            <div className="row  g-4">
                <div className="col-md-3 " >
                    <div style={{ background: 'red', border: 'none', borderRadius: "10px ", height: '90px', color: "white", textAlign: 'center' }}>
                        <h2>Total Earnings</h2>
                        <span>$0</span>

                    </div>
                </div>
                <div className="col-md-3 " >
                    <div style={{ background: '#82E0AA ', border: 'none', borderRadius: "10px ", height: '90px', color: "white", textAlign: 'center' }}>
                        <h2>Total Sales</h2>
                        <span>$0</span>

                    </div>
                </div>
                <div className="col-md-3 " >
                    <div style={{ background: '#FBC57C', border: 'none', borderRadius: "10px ", height: '90px', color: "white", textAlign: 'center' }}>
                        <h2>Total Order</h2>
                        <span>$0</span>

                    </div>
                </div>
                <div className="col-md-3 " >
                    <div style={{ background: '#3FF5EA', border: 'none', borderRadius: "10px ", height: '90px', color: "white", textAlign: 'center' }}>
                        <h2>Total Costumer</h2>
                        <span>$0</span>

                    </div>
                </div>

            </div>
            {/* Data Analysis */}
            <div className=" mt-5">
                <div style={{ width: '100%' }}>
                    <h4>A demo of synchronized AreaCharts</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart
                            width={500}
                            height={200}
                            data={data}
                            syncId="anyId"
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <p>Maybe some other content</p>

                    <ResponsiveContainer width="100%" height={200}>
                        <AreaChart
                            width={500}
                            height={200}
                            data={data}
                            syncId="anyId"
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <ProductAnalyics />
            </div>
        </div>
    );
};

export default Admin;