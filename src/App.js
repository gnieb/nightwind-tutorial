import Footer from "./Footer";
import nightwind from "nightwind/helper"

function App() {
// 
// slate 300


  return (
    <div className="w-screen h-screen flex justify-center bg-slate-200">
      <div>
        <div className="p-5 text-center text-4xl ">WELCOME TO A NIGHTWIND DEMO</div>

        <div className="w-full justify-center flex">
          <div className="w-1/2 p-10">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </p>
          </div>
          <div className="w-1/2 p-10">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div 
          className="p-2 px-5 rounded-full bg-slate-800 text-white cursor-pointer"
          onClick={() => nightwind.toggle()}>FLIP THE SWITCH</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
