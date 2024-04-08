import React from "react"

interface props {
    pCode: number;
    pName?: string;
    qty?: number;
}

const Product:React.FC<props> = (props) => {
    return (
        <div>
            <h2>{props.pCode} - {props.pName} - {props.qty}</h2>
        </div>
    )
}

export default Product;