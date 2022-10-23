import './index.css';
import { createDonateItem } from './src/utils/createDonateItem'
import addTotalAmount from './src/utils/addTotalAmount'

const makeDonateButton = document.querySelector('button')
makeDonateButton.addEventListener('click', (event) => {
    createDonateItem()
    addTotalAmount()
    document.querySelector('.donate-form__donate-input').value = ''
})

