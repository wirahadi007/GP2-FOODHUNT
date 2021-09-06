import React from 'react'

const ModalOrderCard = props => {
    return (
        <div className="flex felx-col p-2 bg-gray-400 m-8 rounded-md">
            <div className="tumb h-full w-1/3">
                <img src={props.strMealThumb} alt="Image" className="h-full w-full"/>
            </div>

            <div className="info flex flex-col w-2/3 justify-center p-2">
                <p className="text-right">{props.strMeal}</p>
                <p className="text-right">Rp. {props.price.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default ModalOrderCard;