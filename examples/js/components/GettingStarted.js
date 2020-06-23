import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i,
      type: i
    });
  }
}

addProducts(5);

class GettingStarted extends React.Component {

  createCustomDeleteButton = (onBtnClick) => {
    return (
      <button style={ { color: 'red' } } onClick={ onBtnClick }>Delete it!!!</button>
    );
  }

  render() {
    const options = {
      deleteBtn: this.createCustomDeleteButton
    };
    const selectRow = {
      mode: 'checkbox'
    };
    return (
      <div>
        <h1>Getting started</h1>
        <code>npm i react-bootstrap-table --save</code>
        <BootstrapTable selectRow={ selectRow } data={ products } options={ options }>
          <TableHeaderColumn dataField='id' isKey={ true } showId={ true } >Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
          <TableHeaderColumn dataField='type'>Product type</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default GettingStarted;
