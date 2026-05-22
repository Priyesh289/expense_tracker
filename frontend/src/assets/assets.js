import foodSign from './foodSign.png'
import shopping_bag from './shopping_bag.png'
import health_sign from './health_Sign.png'
import bills_sign from './bills_sign.png'
import movie_sign from './movie_sign.png'
import rent_sign from './rent_sign.png'
import travel_sign from './travel_sign.png'
import others_sign from './others_sign.png'
import calendar from './calendar.png'

export const assets = {
    calendar
}
export const expensesCategoty = [
    {
        id: 0,
        name: 'All',

    }, {
        id: 1,
        name: 'Food',
        img: foodSign
    },
    {
        id: 2,
        name: 'Shopping',
        img: shopping_bag
    },
    {
        id: 3,
        name: 'Rent',
        img: rent_sign
    },
    {
        id: 4,
        name: 'Transport',
        img: travel_sign
    },
    {
        id: 5,
        name: "Health",
        img: health_sign
    },
    {
        id: 6,
        name: "Bills",
        img: bills_sign
    },
    {
        id: 7,
        name: "Movie",
        img: movie_sign
    },
    {
        id: 8,
        name: "Others",
        img: others_sign
    }]

