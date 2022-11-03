import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@Components";
import { Arena } from "@Pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="arena" element={<Arena /> }/>
          <Route path="clones" />
          <Route path="trascender" />
          <Route path="foro" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
