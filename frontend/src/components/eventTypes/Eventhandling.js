import React, { useState } from "react";
import PrivateEvents from "../../components/eventTypes/PrivateEvents";
import PublicEvents from "../../components/eventTypes/PublicEvents";

const App = () => {
    const [activeTab, setActiveTab] = useState("Private Events");

    return (
        <div className="w-1/2"> 
            {/* Tab Navigation */}
            <div className="w-full flex justify-center">
                <div className="flex border-b border-gray-200">
                    {["Private Events", "Public Events"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-3 text-sm font-medium ${
                                activeTab === tab
                                    ? "border-b-2 border-red-500 text-black"
                                    : "text-gray-500"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Conditional Rendering Based on Active Tab */}
            <div className="p-5">
                {activeTab === "Private Events" && <PrivateEvents />}
                {activeTab === "Public Events" && <PublicEvents />}
            </div>
        </div>
    );
};

export default App;
