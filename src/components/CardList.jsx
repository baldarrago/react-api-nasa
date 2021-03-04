import React from 'react'
import Card from './Card'

const CardList = ({ listItems }) => {
    return (
        <div className="row">
            {
                listItems.map((item, index) => <Card key={index} info={item} />)
            }
        </div>
    )
}

export default CardList
