import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";


export default function UserDetails() {
    
    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');
    console.log(data);

    
    const userId = useParams();
    // console.log(userId);

    // console.log(userId.userId)
    

    const userData = data?.find((user) => user.id == userId.userId);


    // console.log(userData)


    return (
        <>
        <Header />
        <main>
          <div className="container py-4">
            <h1>List of Users</h1>
            {loading && <div className="alert alert-info">Loading...</div>}
            {error && <div className="alert alert-danger">An error occured while fetching the data.</div>}
            {userData ? (<div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Name:</strong> {userData.name}</li>
                    <li className="list-group-item"><strong>Username:</strong> {userData.username}</li>
                    <li className="list-group-item"><strong>Email:</strong> {userData.email}</li>
                    <li className="list-group-item"><strong>Phone:</strong> {userData.phone}</li>
                    <li className="list-group-item"><strong>Website:</strong> {userData.website}</li>
                    <li className="list-group-item"><strong>Company:</strong> {userData.company.name}({userData.company.catchPhrase})</li>
                    <li className="list-group-item"><strong>City:</strong> {userData.address.city}</li>
                    <li className="list-group-item"><strong>Zipcode:</strong> {userData.address.zipcode}</li>
                </ul>
            </div>): (<div>Not Found</div>)}
          </div>
        </main>
      </>
    );
  }
  