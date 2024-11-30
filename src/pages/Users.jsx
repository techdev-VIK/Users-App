import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

function Users() {
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(data)

    return (
      <>
        <Header />
        <main>
          <div className="container py-4">
            <h1>List of Users</h1>
            {loading && <div className="alert alert-info">Loading...</div>}
            {error && <div className="alert alert-danger">An error occured while fetching the data.</div>}
            <ul>
            {data && data.length > 0 && data.map((user, index) => (
                <li key={index} className="py-3">
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Company: {user.company.name}</p>
                    <Link className="btn btn-primary" to={`/users/${user.id}`}>View Details</Link>
                </li>
            ))}
            </ul>
           
          </div>
        </main>
        <Footer />
      </>
    );
  }


export default Users;