import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";

import Footer from "./components/Footer";
import { Link, NavLink } from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary text-center text-light">
          <div className="py-5">
            <h1 className="display-1">User Database</h1>
            <p>View company's user data</p>
            <Link className="btn btn-light text-dark fw-medium" to="/pages/users">View List of Users</Link>
          </div>
        </section>

        <section className="bg-tertiary text-center">
          <div className="py-5">
            <h1 className="display-1">User Statistics</h1>
            <p>View company's user statistics</p>
            <Link className="btn btn-primary fw-medium" to="/pages/statistics">View User Stats</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
