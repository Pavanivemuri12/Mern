import Navbar from "./components/Navbar"
const App = () => {
    const data = {
        appname: "hello"
    }
    const logodata = "mylogo"
    const test = "hello world "
    return (
        <>
        <div class=" space-y-4 ">
        <p className="text-white bg-orange-400 text-center w-[100rem] size-20">"This is a workshop of 20 days"</p>
      
      <p className="text-white bg-green-600 text-center place-content-around w-[100rem] size-20">{test}</p>
            <Navbar appdata={data} logo={logodata}/>
            </div>
            
        </>
    )
}

export default App