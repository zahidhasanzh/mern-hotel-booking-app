import Layout from "./layouts/Layout"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

function App() {

  return (
      <>
        <Router>
            <Routes>
              <Route path="/" element={<Layout>
                 <p>Home Page</p>
              </Layout>}/>
              <Route path="/search" element={<Layout>
                  <p>Search Page</p>
              </Layout>}/>
            </Routes>
        </Router>
      </>
  )
}

export default App
