import {Grid} from "./grid.jsx"

export default function Welcome() {
  return (
    <>
      <div className="mt-20 p-4">
        <div className=" p-4 text-center text-5xl font-bold">
          Welcome to <span className="text-blue-700"> React.js!</span>
        </div>
        <p className="p-2 mt-4 text-center text-xl font-medium">
          Get started by editing{" "}
          <span className="px-[6px] py-[4px] bg-gray-200 rounded-[4px] font-[400] text-[14px]">
            pages/main.tsx
          </span>
        </p>
      </div>
      <Grid/>

      
    </>
  );
}
