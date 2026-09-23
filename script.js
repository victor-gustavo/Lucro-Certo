const rateInformation = document.querySelector('select')
const productCost = document.querySelector('#product-cost')
const packingCost = document.querySelector('#packing-cost')
const salePrice = document.querySelector('#sale-price')
const feeInformation = document.querySelector('#fe-information')

switch(rateInformation.value){
    case 'Mercado Livre':
        var plattaformPercentage = 16
        var fixedRate = 6
        break
    case 'Tiktok':
        plattaformPercentage = 12
        fixedRate = 6
        break
    case 'Shopee':
        plattaformPercentage = 20
        fixedRate = 6
}

const regex = /\D+/g

productCost.addEventListener('input', () =>{
    let value = productCost.value
    productCost.value = formatCurrency(value.replace(regex, ""))
    console.log(formatValue(productCost.value))

})

packingCost.addEventListener('input', () =>{
    let value = packingCost.value
    packingCost.value = formatCurrency(value.replace(regex, ""))

    console.log(formatValue(packingCost.value))
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