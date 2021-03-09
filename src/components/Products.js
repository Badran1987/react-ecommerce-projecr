import React from 'react'
import Item from './Item'
import '../css/Products.css'

const Products = () => {
    return (<>
        <section className="results">
        <h2 className="subheading">Results</h2>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        </section>
    </>)
}

export default Products