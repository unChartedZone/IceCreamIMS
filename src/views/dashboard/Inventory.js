import React from 'react'

const Inventory = () => {
  return (
    <div id="dashboard-homepage" className="container-fluid">
      <div className="row">
        <div id="dashboard-header" className="col-12">
          <h1 className="minty-text">Inventory</h1>
        </div>
      </div>
      <div id="areaToPrint">
        <table className="table table-striped table-dark icetrack-table">
          <thead>
            <tr>
              <th scope="col">Product Code</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123</td>
              <td>Vanilla</td>
              <td>Quantity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container-fluid icetrack-form-div">
        <div className="row">
          <div className="col-4">
            <form method="post">
              <div className="form-group">
                <button
                  className="btn minty-button minty-dropdown-button btn-block"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <h1>
                    Add Inventory Item
                    <i
                      className="fa fa-arrow-circle-down"
                      aria-hidden="true"
                    ></i>
                  </h1>
                </button>
              </div>
              <div id="collapseExample" className="collapse">
                <div className="form-group">
                  <label htmlFor="productName">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    name="productName"
                    aria-describedby="product name"
                    placeholder="Product Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="text"
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn minty-button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
