import React from 'react'

const Header = () => {
    return(
        <div className="text-center font-weight-bold h1 py-4 bg-info row">
            <div className="col-11">
                Shopping Management
            </div>
            <div className="col-1">
                <i className="fa fa-shopping-cart text-light" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default Header;