import {Link} from 'react-router-dom'

function App({laptops}) { 
  return (
    <div className="container my-5">
      <h2 className="mb-4">Ordinateurs portables</h2>
      <div className="row">
        {laptops.map((laptop) => (
          <div className="col-md-3 mb-4" key={laptop.id}>
            <div className="card h-100">
              <Link to={`/${laptop.id}`}>
                <img
                  src={laptop.image}
                  className="card-img-top image"
                  alt={laptop.title}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{laptop.title}</h5>
                <p className="card-text">{laptop.price}</p>
                <button className="btn btn-primary">Ajouter au panier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default App;
