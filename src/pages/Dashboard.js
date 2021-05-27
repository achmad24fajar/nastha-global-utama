import React, { useContext } from "react";

import { EventContext } from "../context/EventContext";

const Dashboard = () => {
  const [state] = useContext(EventContext);
  console.log(state);
  return (
    <div className="mt-5">
      <div className="container">
        <div>
          <h4>Dashboard</h4>
        </div>
        <div className="search mt-3">
          <input class="form-control" type="text" placeholder="Search" />
        </div>
        <div className="mt-3">
          <table class="table">
            <thead class="bg-secondary text-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link text-dark" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
