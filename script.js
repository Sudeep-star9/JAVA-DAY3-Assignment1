const Button = document.createElement('button')
document.body.appendChild(Button)
Button.innerHTML = "T-shirt"
Button.addEventListener("click",dothis )
Button.setAttribute('value','tshirt')


const Button1 = document.createElement('button')
document.body.appendChild(Button1)
Button1.innerHTML = "Pant"
Button1.addEventListener("click",dothis)
Button1.setAttribute('value','pant')

const Button2 = document.createElement('button')
document.body.appendChild(Button2)
Button2.innerHTML = "Ball"
Button2.addEventListener("click", dothis)
Button2.setAttribute('value','Ball')

const Button3 = document.createElement('button')
document.body.appendChild(Button3)
Button3.innerHTML = "Volley-ball"
Button3.addEventListener("click", dothis)
Button3.setAttribute('value','Volleyball')



function buy(Name, markedprice, discount) {
    console.log('you choosed a' + ' ' + Name)
    console.log('The price of' + ' ' + Name + ' ' + 'is' + ' ' + markedprice)
    console.log('The discount  of' + ' ' + Name + " " + 'is' + ' ' + discount)
    var Discount = markedprice * discount / 100;
    var total_price = markedprice - Discount;
    //  console.log(total_price)
    console.log('The total price of' + ' ' + Name + ' ' + 'is' + ' ' + total_price)
}

function dothis(event) {
    if(event.target.value=='tshirt'){
        buy('t-shirt', 500, 20)
    }
    else if (event.target.value=='pant'){
        buy('pant', 500, 20)
    }
    else if(event.target.value=='Ball'){
        buy('Ball', 500, 20)
    }
    else {
        buy('Volleyball', 500, 20)
    }
    
}

// function dothis() {
//     buy('pant', 600, 30)
// }

// function dothis() {
//     buy('Football ball', 677, 2)
// }
// function dothis() {
//     buy('Volleyball', 666, 0)
// }