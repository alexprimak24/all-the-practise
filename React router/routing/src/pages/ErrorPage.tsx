import { Link } from "react-router-dom";
function ErrorPage() {
  return (
    <div className="bg-[#681010]">
      This Page wasn't found, please head to <Link to="/">Homepage</Link>
    </div>
  );
}

export default ErrorPage;
