import { useState } from "react";
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer";
import Links from "./components/Links";

function App() {
  const [week, setWeek] = useState<number>(1);

  return (
    <>
      <Header week={week} setWeek={setWeek} />
      <Content week={week} />
      <Footer />
      <Links />
    </>
  )
}

export default App
