const productCost = document.querySelector('#product-cost')
const packingCost = document.querySelector('#packing-cost')
const salePrice = document.querySelector('#sale-price')

const regex = /\D+/g

productCost.addEventListener('input', () =>{
    let value = productCost.value
    productCost.value = formatValue(value.replace(regex, ""))
    console.log(productCost.value)
})

packingCost.addEventListener('input', () =>{
    let value = packingCost.value
    packingCost.value = formatValue(value.replace(regex, ""))
})

salePrice.addEventListener('input', () =>{
    let value = salePrice.value
    salePrice.value = formatValue(value.replace(regex, ""))
})

function formatValue(valor){
    let value = valor/100

    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })    
}