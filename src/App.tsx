import { useState } from "react";
import Header from "./components/Header"
import Content from "./components/Content"

function App() {
  const [week, setWeek] = useState<number>(1);

  return (
    <>
      <Header week={week} setWeek={setWeek} />
      <Content week={week} />
    </>
  )
}

export default App
