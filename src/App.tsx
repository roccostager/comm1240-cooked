import { useState } from "react";
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer";

function App() {
  const [week, setWeek] = useState<number>(1);

  return (
    <>
      <Header week={week} setWeek={setWeek} />
      <Content week={week} />
      <Footer />
    </>
  )
}

export default App
