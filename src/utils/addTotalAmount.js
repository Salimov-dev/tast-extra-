export default function addTotalAmount() {
    const amount = document.querySelector('.donate-form__donate-input').value
    const setAmount = document.querySelector('#total-amount').textContent
    const valueSetAmount = setAmount.replace('$', '')
    const regex = /^0/g
    let newAmount
        if (amount > 0 && amount.match(regex) != 0) {
            newAmount = Number(amount) + Number(valueSetAmount)
            document.querySelector('#total-amount').innerHTML = `${newAmount}$`
        }
}