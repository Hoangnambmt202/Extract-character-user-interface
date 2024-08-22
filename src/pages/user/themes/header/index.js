import "./index.css";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="container grid mx-auto px-4 ">
        <div className="flex justify-between h-20 items-center " >
          <div className="header-left flex " >
            <a href={{}} className="bg-indigo-600"><h2>LOGO</h2></a> 
          </div>
          <div className="header-right " >
            <a href={{}} className=" inline-block mx-1 px-6 py-2 rounded-lg text-indigo-600"> Login </a>
            <a href={{}} className=" inline-block mx-1 px-6 py-2 rounded-lg bg-indigo-600 text-white "> SignUp </a>

          </div>

        </div>
      </div>
 
      
    </header>
  );
};
export default Header;
