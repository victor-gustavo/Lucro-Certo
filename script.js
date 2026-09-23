const rateInformation = document.querySelector('#marketplace')
const productCost = document.querySelector('#product-cost')
const packingCost = document.querySelector('#packing-cost')
const salePrice = document.querySelector('#sale-price')
const feeInformation = document.querySelector('#fe-information')
const categoryMl = document.querySelector('.select-category')

const regex = /\D+/g

productCost.addEventListener('input', () =>{
    let value = productCost.value
    productCost.value = formatCurrency(value.replace(regex, ""))
})

packingCost.addEventListener('input', () =>{
    let value = packingCost.value
    packingCost.value = formatCurrency(value.replace(regex, ""))
})  

salePrice.addEventListener('input', () =>{
    let value = salePrice.value
    salePrice.value = formatCurrency(value.replace(regex, ""))
})

function formatCurrency(valor){
    let value = valor/100

    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })    
}

function formatValue(valor){
    return Number(valor.replace(/[^\d,-]/g, '').replace(',', '.'))
}

rateInformation.addEventListener('change', () =>{
    switch(rateInformation.value){
        case 'Mercado Livre': 
            categoryMl.style.display = 'grid'
            break
    }
})