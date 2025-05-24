import { AlertCircle, Search } from "lucide-react";
import { useState } from "react";
import '../../App.css';
import { TextInput } from './TextInput';


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function TextInputVariants() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [darkMode, setDarkMode] = useState(false);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
          <div className={`${darkMode ? "dark bg-neutral-900 text-white" : "bg-white text-black"} min-h-screen p-8 space-y-8 transition-colors duration-300`}>
              <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="mb-8 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                  Toggle {darkMode ? "Light" : "Dark"} Mode
              </button>

              <section className="space-y-4 max-w-md mx-auto">
                  <h2 className="text-2xl font-semibold mb-4">TextInput Variants Demo</h2>

                  <div>
                      <label className="block mb-1 font-medium">Default</label>
                      <TextInput placeholder="Default input" />
                  </div>

                  <div>
                      <label className="block mb-1 font-medium">Sizes</label>
                      <TextInput size="sm" placeholder="Small size" className="mb-2" />
                      <TextInput size="md" placeholder="Medium size (default)" className="mb-2" />
                      <TextInput size="lg" placeholder="Large size" />
                      <TextInput size="xl" placeholder="Large size" />
                  </div>

                  <div>
                      <label className="block mb-1 font-medium">With Left Icon</label>
                      <TextInput
                          iconLeft={<Search size={16} />}
                          placeholder="Search here"
                      />
                  </div>

                  <div>
                      <label className="block mb-1 font-medium">With Right Icon</label>
                      <TextInput
                          iconRight={<Search size={16} />}
                          placeholder="Search here"
                      />
                  </div>

                  <div>
                      <label className="block mb-1 font-medium">Error State</label>
                      <TextInput
                          error
                          errorMessage="This field is required"
                          iconRight={<AlertCircle size={16} />}
                          placeholder="Input with error"
                      />
                  </div>

                  <div>
                      <label className="block mb-1 font-medium">Disabled</label>
                      <TextInput
                          disabled
                          placeholder="Disabled input"
                      />
                  </div>
              </section>
          </div> 
    </>
  )
}

export default TextInputVariants
