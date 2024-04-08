import React from "react"

const Product:React.FC<{pCode: number, pName: string}> = (props) => {
    return (
        <div>
            <h3>{props.pCode} - {props.pName}</h3>
        </div>
    )
}

export default Product;