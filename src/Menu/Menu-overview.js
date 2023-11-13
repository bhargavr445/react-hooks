import React, { useEffect, useState } from 'react'
import menuData from './data';
import ManuNav from './manu-nav';
import MenuDetails from './Menu-details';

const Menu = () => {

  const [menuItems, setMenuItems] = useState([]);
  const [navItems, setNavitems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    getMenuItems()
  }, []);

  const getMenuItems = () => {
    setMenuItems(menuData);
  }

  useEffect(() => {
    deriveMenuItems();
    selectedTabHandler('All');
  }, [menuItems])

  const deriveMenuItems = () => {
    const categories = { 'All': menuItems.length };
    menuItems.forEach((item) => {
      const { category } = item;
      if (!categories[category]) {
        categories[category] = 0;
      }
      categories[category]++;
    });
    console.log(categories);
    const categoryCounts = Object.entries(categories).map(([category, count]) => ({
      category,
      count,
      active: false
    }));
    setNavitems(categoryCounts);
  }

  const selectedTabHandler = (tabName) => {
    if (tabName === 'All') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter((item) => item.category === tabName));
    }
  }

  const displayMenuDetails = () => {
    return filteredItems.map((filteredItem, index) => (<MenuDetails key={index} filteredData={filteredItem} />))
  }

  return (
    <div>
      <ManuNav menuItems={navItems} selectedTabClickHandler={selectedTabHandler} />
      {displayMenuDetails()}
    </div>
  )
}

export default Menu;