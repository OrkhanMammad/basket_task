let products = JSON.parse(localStorage.getItem('products'))
if (products.length > 0) {
    for (let pair of products) {
        let html = `
        <tr style="padding: 30px 0;">
           <th scope="row">${pair.Id}</th>
           <td><img style="width: 60px;" src="${pair.Image}" alt=""></td>
           <td>${pair.Name}</td>
           <td><input class="inputs" id="${pair.Id}" type="number" min="1"></td>
           <td>${pair.Price * pair.Count}</td>
           <td><button class="removebtn" id="${pair.Id}" style="background-color: red;">Remove</button></td>
         </tr>
         `
        document.getElementById('tbl-bdy').innerHTML += html

    }
}


let inputs = document.querySelectorAll('.inputs')
if (inputs.length > 0) {
    for (let input of inputs) {
        input.addEventListener('change', function () {
            let products = JSON.parse(localStorage.getItem('products'))
            for (let product of products) {
                if (product.Id === input.id) {
                    product.Count = input.value
                    localStorage.setItem('products', JSON.stringify(products))
                    
                    break
                }
            }
            



        })
        
    }
}
let removebtns = document.querySelectorAll('.removebtn')
if (removebtns.length > 0) {
    for (let removebtn of removebtns) {
        removebtn.addEventListener('click', function () {
            let products = JSON.parse(localStorage.getItem('products'))
            for (let product of products) {
                if (product.Id === removebtn.id) {
                    products.pop(product)
                    localStorage.setItem('products', JSON.stringify(products))
                    
                    break
                }
            }
            



        })
        
    }
}

