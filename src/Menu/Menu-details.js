import React, { useEffect } from 'react'

const MenuDetails = ({ filteredData }) => {

    useEffect(() => {
        console.log(filteredData)
    }, [])

    return (
        <div className='section-center'>
            <article key={filteredData.id} className='menu-item-menu'>
                <img src={filteredData.img} alt={filteredData.title} className='photo' />
                <div className='item-info'>
                    <header>
                        <h4>{filteredData.title}</h4>
                        <h4 className='price'>${filteredData.price}</h4>
                    </header>
                    <p className='item-text'>{filteredData.desc}</p>
                </div>
            </article>
        </div>
    )
}

export default MenuDetails