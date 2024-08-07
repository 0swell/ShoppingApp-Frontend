import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button } from "reactstrap";
import * as cartActions from "../../redux/actions/cartActions";
import * as productActions from "../../redux/actions/productActions";
import alertify from "alertifyjs";
import { bindActionCreators } from "redux";

import { Table } from "reactstrap";



class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  // niye fonx tanımlıyoruz sadece sepete eklemesin yarın oburgun alarm da eklicez fln
  addToCart = (product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.notify(product.productName + "sepete eklendi")
  }
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button color="success"  onClick={()=>this.addToCart(product)}>
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),  //cartActions.js
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
