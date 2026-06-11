import {Routes,Route} from "react-router-dom"

import Homepage from "./pages/Homepage"
import Formpage from "./pages/Formpage"
import UserTable from "./pages/UserTable"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/form" element={<Formpage />}></Route>
      <Route path="/table" element={<UserTable />}></Route>
    </Routes>
  )
}

export default App