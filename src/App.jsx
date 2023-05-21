import { useState } from "react";
import ColorList from "./ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  const [colors, setColors] = useState(new Values("#59d506").all(5));

  const [color, setColor] = useState("");
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(5);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className=" mb-20">
      <div className="p-5 mb-5  ">
        <h1 className="mb-5  font-bold text-[2rem]">
          <span className="text-blue-600">C</span>olor{" "}
          <span className="text-green-500">G</span>enerator
        </h1>
        <form action="" className="" onSubmit={handleSubmit}>
          <input
            className=" h-8 mr-3 mb-5 outline-none bg-[#f8fafc]"
            type="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            id=""
          />
          <input
            className=" md:pt-3 text-center md:pb-[0.2rem] "
            type="text"
            name=""
            placeholder="#59d506"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            id=""
          />
          <button
            className="bg-green-700 mt-[-10px] px-2 md:pb-[0.2rem] text-white  rounded-tr-[10px] rounded-br-[10px] pt-2 text-[1.2rem] "
            style={{ background: color }}
          >
            submit
          </button>
        </form>
      </div>
      <ColorList colors={colors} />
      <ToastContainer position="top-center" theme="light" autoClose={1000} />
    </section>
  );
}
