import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="page-not-found-container" style={{
            margin: "0 auto",
        }}>
            <style>
                {`
                    h1, Link {
                        font-size: 3rem;
                        text-align: center;
                    }
                `}
            </style>
            <h1>Page Not Found</h1>
            <Link to={'/'} style={{
                margin: "0 auto",
            }}>
                Please Click here to go to Home Page
            </Link>
        </div>
    )
}