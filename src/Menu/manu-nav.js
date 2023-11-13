import React from 'react'

const ManuNav = ({ menuItems, selectedTabClickHandler }) => {

    const displayTabs = () => {
        return (<div className='btn-container'>
            {menuItems.map((navItem) => (<button onClick={() => selectedTabClickHandler(navItem.category)} type='button' className='filter-btn-menu'>{navItem.category}</button>))}
        </div>)
    }

    return (
        <div>{displayTabs()}</div>
    )
}

export default ManuNav;
