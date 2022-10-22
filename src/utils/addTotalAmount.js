export default function addTotalAmount() {
    const amount = document.querySelector('.donate-form__donate-input').value
    const setAmount = document.querySelector('#total-amount').textContent
    const valueSetAmount = setAmount.replace('$', '')
    const newAmount = Number(amount) + Number(valueSetAmount)
 
    document.querySelector('#total-amount').innerHTML = `${newAmount}$`
}