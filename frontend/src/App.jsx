import { Outlet } from "react-router"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue via-transparent to-black">
        <Header />
        {/* <main className="flex-grow"> */}
          <Outlet />
        {/* </main> */}
        <Footer />
      </div>
    </>
  )
}

export default App
