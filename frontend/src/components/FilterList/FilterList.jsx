import React, { useState } from 'react'
import './FilterList.css'
import { useFinanceData } from '../../context/FinanceContext';

const FilterList = () => {
    const [activeCategory, setActiveCategory] = useState('All')
    const { expensesCategoty, category, setCategoty } = useFinanceData();

    function handleCategory(categoryName) {
        setActiveCategory(categoryName);

        setCategoty(categoryName)
    }

    return (
        <div className="explore-menu-list">

            {expensesCategoty.map((ele) => (
                <div key={ele.id} className={
                    activeCategory === ele.name
                        ? "activeCategory"
                        : "explore-menu-list-item"
                }
                    onClick={() => handleCategory(ele.name)}>
                    <p>{ele.name}</p>
                </div>
            ))}
        </div>
    )
}

export default FilterList