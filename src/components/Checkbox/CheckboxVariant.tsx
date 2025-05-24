import { useState } from "react";
import { Checkbox } from "./Checkbox";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default function CheckboxVariant() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className={`${darkMode ? "dark bg-neutral-900 text-white" : "bg-white text-black"} min-h-screen p-8 space-y-8 transition-colors duration-300`}>
            <div className="min-h-screen p-6 transition-colors">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Checkbox Component Demo</h1>
                    <button
                        onClick={toggleDarkMode}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Toggle {darkMode ? "Light" : "Dark"} Mode
                    </button>
                </div>

                <div className="grid gap-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Sizes</h2>
                        <div className="flex gap-4">
                            <Checkbox id="small" label="Small" size="small" />
                            <Checkbox id="medium" label="Medium" size="medium" />
                            <Checkbox id="large" label="Large" size="large"/>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">States</h2>
                        <div className="flex flex-col gap-2">
                            <Checkbox id="default" label="Default" />
                            <Checkbox id="checked" label="Checked" defaultChecked/>
                            <Checkbox id="error" label="With error" error errorMessage="This field is required" />
                            <Checkbox id="disabled" label="Disabled" disabled />
                            <Checkbox id="disabled-checked" label="Disabled + Checked" disabled defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
