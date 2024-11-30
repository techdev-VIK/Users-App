import Header from "../components/Header";

export default function Statistics() {
   
    return (
      <>
    <Header />
    <main className="container py-4">
    <h1 >User Statistics</h1>
    <hr />
    <div className="container">
    <div className="row">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3>Total Number of Users</h3>
              <h5 className="display-5">10</h5>
            </div>
          </div>
        </div>
        

        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3>Paid Users</h3>
              <h5 className="display-5">5</h5>
            </div>
          </div>
        </div>


        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h3>Most Valuable User</h3>
              <h5 className="display-5">Leanne Graham</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </main>
    
      </>
    );
  }
  