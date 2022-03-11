import * as React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main style={{ padding: 32 }}>
      <p>
        <Link to="/cases">
          <Button>CASES</Button>
        </Link>
      </p>
      <p>
        <Link to="/tests">
          <Button>TESTS</Button>
        </Link>
      </p>
    </main>
  );
};

export default IndexPage;
