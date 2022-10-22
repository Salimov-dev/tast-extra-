export function createDonateItem() {
    const timeOfDonate = moment().format(`MMMM D[th] YYYY, hh:mm:ss a`)

    const donateIinput = document.querySelector('.donate-form__donate-input').value
    
    const createDonateItemHTML = document.createElement('div')
    createDonateItemHTML.className = 'donate-item'
    createDonateItemHTML.innerHTML = `${timeOfDonate} - <b>${donateIinput}$</b>`
    
    const donatesContainerDIV = document.querySelector('.donates-container__donates')
        if (donateIinput != '') {
            donatesContainerDIV.prepend(createDonateItemHTML)
        } 
        
}