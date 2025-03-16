import { Link } from 'react-router-dom';

function Home({ packages, deletePackage }) {
  return (
    <div>
      <h1>Package Management System</h1>
      <Link to="/add"><button>Add New Package</button></Link>

      {packages.length === 0 ? (
        <p>No packages available.</p>
      ) : (
        <ul>
          {packages.map((pkg, index) => (
            <li key={index}>
              <strong>{pkg.name}</strong> ({pkg.category} - {pkg.material})
              <br />
              Dimensions: {pkg.length}cm x {pkg.width}cm x {pkg.height}cm | Volume: {pkg.volume}cm³ | Weight: {pkg.weight}kg
              <br />
              Price: ${pkg.price} | Discount: {pkg.discount || 0}% | Variant: {pkg.variant}
              <br />
              <Link to={`/edit/${index}`}><button>Edit</button></Link>
              <button onClick={() => deletePackage(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
