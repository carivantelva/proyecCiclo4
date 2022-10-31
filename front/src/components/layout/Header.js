import React, { Fragment } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-12 col-md-3'>
                    <div className='navbar-brand'>
                        <img src="./images/logos/logotello8.png" alt="No cargo Imagen"></img></div>
                </div>


                <div className='col-12 col-md-6 mt-2 mt-md-0'>
                    <div className="input-group">
                        <input
                            type="text"
                            id="Buscar"
                            class="form-control"
                            placeholder='Que producto busca?'></input>
                        <div class="input-group-append">
                            <button id="search_btn" class="btn">
                                <i class="fa fa-search" aria-hidden="true">Buscar</i>

                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">

                    <div className="ml-4 dropdown d-inline">
                        <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button"
                            id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Panel de Control</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/dashboard">Adm. Productos</Link>
                            <Link className="dropdown-item" to="/">Pedidos</Link>
                            <Link className="dropdown-item" to="/">Mi cuenta</Link>
                            <Link className="dropdown-item" to="/">Cerrar Sesion</Link>
                        </div>
                    </div>

                    <span id="cart" className="ml-3">Carrito</span>
                    <span className="ml-1" id="cart_count">2</span>
                </div>



            </nav>





            <nav2 nav className='navbar row'><div className='col-12 col-md'>
                <div className='navbar-brand'></div>
            </div>



                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class="group-btn" onClick={Activar}>1</button>
                        <button type="button" class="group-btn" onClick={Activar2}>2</button>
                        <button type="button" class="group-btn" onClick={Activar3}>3</button>
                        <button type="button" class="group-btn" onClick={Activar4}>4</button>

                    </div>
                    <div class="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" class="agregar_btn">5</button>
                        <button type="button" class="agregar_btn">6</button>
                        <button type="button" class="agregar_btn">7</button>
                    </div>






                </div>





            </nav2>









        </Fragment>

    )
}

function Activar() {
    alert("primer boton")
}

function Activar2() {
    alert("segundo boton")
}
function Activar3() {
    alert("tercer boton")
}
function Activar4() {
    alert("cuarto boton")
}



export default Header