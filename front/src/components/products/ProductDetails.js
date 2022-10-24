import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Caneca Plastica"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src="../../images/productos/caneca-plastica-cerrada.jpg" alt="Imagen_producto" height="450" width="450"></img>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
                <h3>Caneca Plastica prueba Carlos</h3>
                <p id="product_id">Product #555555-5555</p>
            </div>
        </div>
    </Fragment>
  )
}