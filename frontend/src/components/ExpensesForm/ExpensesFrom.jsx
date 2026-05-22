import React, { useState } from 'react'
import './ExpensesFrom.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFinanceData } from '../../context/FinanceContext';

const ExpensesFrom = () => {
    const [date, setDate] = useState('')
    const [note, setNote] = useState('');

    const { assets, formData, setFormData, dispatch } = useFinanceData()


    return (
        <div className="dateNoteContainer">

            {/* Date Input */}
            <div className="inputBox">
                <label className="label">Select Date</label>

                <DatePicker
                    id='date'
                    className="datepicker"
                    selected={formData.date}
                    onChange={(selectedDate) =>
                        setFormData({
                            ...formData,
                            date: selectedDate
                        })
                    }
                required/>

                <img src={assets.calendar} alt=""
                    className="calendarIcon" />
            </div>

            {/* Note Input */}
            <div className="inputBox">
                <label className="label">Note</label>

                <input
                    id='note'
                    type="text"
                    placeholder="Enter note..."
                    value={formData.note}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            [e.target.id]: e.target.value
                        })
                    }
                    className="inputField"
                    required
                />
            </div>

        </div>
    )
}

export default ExpensesFrom