import { useState } from 'react'
import './ToggleButton.css'
import { useFinanceData } from '../../context/FinanceContext'

const ToggleButton = () => {
    const [active, setActive] = useState('expense')
    const { formData, setFormData } = useFinanceData();

    function handleToggle(type) {

        // shift button UI
        setActive(type)

        // update formData only on click
        setFormData({
            ...formData,
            type: type
        })
    }
    return (
        <div className='container'>
            <div className="toggleContainer"  >
                <button id='type'
                 type='button'
                    value={formData.type}
                    className={active === 'expense' ? 'activeBtn' : 'toggleBtn'}
                    onClick={() => handleToggle('expense')}
                >
                    EXPENSES
                </button>

                <button
                    type='button'
                    value={formData.type}
                    className={active === 'income' ? 'activeBtn' : 'toggleBtn'}
                    onClick={() => handleToggle('income')}
                >
                    INCOME
                </button>
            </div>
        </div>
    )
}

export default ToggleButton