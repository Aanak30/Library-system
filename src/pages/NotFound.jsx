import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>

      {/* Invalid URL display */}
      <p className="error-path">
        Invalid URL: <span>{location.pathname}</span>
      </p>

      {/* Back to Home */}
      <Link to="/" className="home-btn">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;