import React, { useState } from 'react'
import { product_categories } from "./product_data"
import product_data from "./product_data"

const Middle = () => {

    const [selectedProductCategoryProducts, updateSelectedProductCategoryProducts] = useState(product_data.Cars);

    const product_category_buttons = product_categories.map((value) => {
        return (<div className="row text-ceenter mx-5 my-3">
                    <input type="button" className="btn btn-danger" value={value} onClick={() => {
                        switch(value) {
                            case "Cars":
                                updateSelectedProductCategoryProducts(product_data.Cars);
                                break;

                            case "Books":
                                updateSelectedProductCategoryProducts(product_data.Books);
                                break;

                            case "Shooes":
                                updateSelectedProductCategoryProducts(product_data.Shooes);
                                break;

                            case "Toys":
                                updateSelectedProductCategoryProducts(product_data.Toys);
                                break;

                            case "Mobiles":
                                updateSelectedProductCategoryProducts(product_data.Mobiles);
                                break;

                            case "Clothes":
                                updateSelectedProductCategoryProducts(product_data.Clothes);
                                break;

                            default:
                                updateSelectedProductCategoryProducts(product_data.Cars);
                                break;
                            }
                        }} />
                 </div>);
             });

    const diaplay_products = selectedProductCategoryProducts.map((value) => {
        return(
            <div className="col-4 mb-3">
                <div className="card" style={{width:"300px", height:"415px" }}>
                    <img src={value.imageSrc} className="card-img-top" alt={value.imageSrc} width="200px" height="250px" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{value.productName}</h5>
                        <p className="font-weight-bold">Price : <span className="text-info">{value.price}</span></p>
                        <button className="btn btn-danger px-4 font-weight-bold">Buy</button>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <div className="row">
            <div className="col-auto bg-primary font-weight-bold">
                {product_category_buttons}
            </div>
            <div className="col overflow-auto" style={{height: "400px"}}>
                <div className="row">
                    {diaplay_products}
                </div>
            </div>
        </div>
    );
}

export default Middle;