
function activePanel(index) {
    
    const activePanel = document.getElementsByClassName('active');
    activePanel[0].classList.remove('active');

    const panels = document.getElementsByClassName('panel');
    panels[index].classList.add('active');

}


// panel logowania ======================================================================================================================================

let users = [];

class User {
    constructor (login, password) {
        this.login = login ;
        this.password = password;
    }
}

const btnLoginJS = document.getElementById('btnLogin');
btnLoginJS.addEventListener('click', () => {
    const logBtn = document.getElementById('loginInput');
    const login = logBtn.value;

    const passBtn = document.getElementById('passwordInput');
    const password = passBtn.value;    

    let usersCheck = JSON.parse(localStorage.getItem('accounts'))

    for (let i=0; i< usersCheck.length; i++) {
        if (usersCheck[i].login == login && usersCheck[i].password == password) {

            logBtn.value = '';
            passBtn.value = '';

            activePanel(2);

            return render();

            }
    }
    alert ('Wrong Email or Password');
    logBtn.value = '';
    passBtn.value = '';

} )

const btnSignUpLogJS = document.getElementById('btnSignUpLog');
btnSignUpLogJS.addEventListener('click', () => {

    const logBtn = document.getElementById('loginInput');
    const passBtn = document.getElementById('passwordInput');

    logBtn.value = '';
    passBtn.value = '';

    activePanel(1);
})

// panel rejestracji ==================================================================================================================================

const btnSignUpJS = document.getElementById('btnSignUp');
btnSignUpJS.addEventListener('click', () => { 
    
    const regLoginInput = document.getElementById('regLoginInput');
    const regLoginInputValue = regLoginInput.value;

    const regPasswordInput = document.getElementById('regPasswordInput');
    const regPasswordInputValue = regPasswordInput.value;

    checkPassword(regPasswordInputValue);
    
    users = JSON.parse(localStorage.getItem('accounts'));

    if  (users == null){

        users = [];
    }

    let usersCheck = JSON.parse(localStorage.getItem('accounts'));

    if (usersCheck != null) {
        for (let i=0; i< usersCheck.length; i++) {
            if (usersCheck[i].login == regLoginInputValue) {

                regLoginInput.value = '';
                regPasswordInput.value = '';

                return alert ('User already exists');
                }
        }
    }

    if (regLoginInputValue != '' && checkPassword(regPasswordInputValue) == true) {

        regLoginInput.value = '';
        regPasswordInput.value = '';

        users.push(new User (regLoginInputValue, regPasswordInputValue));

        localStorage.setItem('accounts', JSON.stringify(users));
        
        alert('You were successfully registered! Please proceed with Log In')
        activePanel(0);
    }
    else{
        alert('Your login cannot be blank and your password must be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (!@#$%^&*)')
    }

} )

const regBtnHomeJS = document.getElementById('regBtnHome');
regBtnHomeJS.addEventListener('click', () => {
    const regLoginInput = document.getElementById('regLoginInput');
    const regPasswordInput = document.getElementById('regPasswordInput');


    regLoginInput.value = '';
    regPasswordInput.value = '';

    activePanel(0)
  })

function checkPassword(passInput) { 
    const strong = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if(passInput.match(strong)) 
        { 
        return true;
        }
    else
        { 
        return false;
    }
} 

// Panael Invoice ======================================================================================================================================

class Invoice {

    constructor(invoiceNr, invoiceDesc, invoicePrice) {
        this.invoiceNr = invoiceNr;
        this.invoiceDesc = invoiceDesc;
        this.invoicePrice = invoicePrice;
    }
    generateHTML() {
        const container = document.createElement('div');
        const mainP = document.createElement('p');
        const clearBtn = document.createElement('button')

        // clearBtn.value = this.index;

        mainP.innerText = 'Invoice Nr: ' + this.invoiceNr + ' || ' + 'Description: ' + this.invoiceDesc + ' || ' + 'Price: $' + this.invoicePrice;
        clearBtn.innerText = 'Delete'
        clearBtn.name = 'clearBtn' 

        container.appendChild(mainP);
        container.appendChild(clearBtn);

        const invoiceListCheck = JSON.parse(localStorage.getItem('invoices'));

        clearBtn.addEventListener('click', () => {
            for(let i=0; i< invoiceListCheck.length; i++) {
                if (this.invoiceNr == invoiceListCheck[i].invoiceNr) {

                    invoiceListCheck.splice(i, 1);

                    localStorage.setItem('invoices', JSON.stringify(invoiceListCheck));

                    return render();
            }
        }
        })
        return container;
        
    }
}

let invoiceList = [];

const btnAddInvoiceJS = document.getElementById('btnAddInvoice');
btnAddInvoiceJS.addEventListener('click', () => {
    const invoiceNumber = document.getElementById('invoiceNr');
    const invoiceNumberValue = invoiceNumber.value;

    const invoiceDescr = document.getElementById('invoiceDescr');
    const invoiceDescrValue = invoiceDescr.value;

    const invoicePrice = document.getElementById('invoicePrice');
    const invoicePriceValue = invoicePrice.value;

    invoiceList = JSON.parse(localStorage.getItem('invoices'));

    if (invoiceList == null) {
        invoiceList = [];
    }

    // const invoiceListCheck = JSON.parse(localStorage.getItem('invoices'));

    for(let i=0; i< invoiceList.length; i++) {
        if (invoiceNumberValue == invoiceList[i].invoiceNr) {
            invoiceNumber.value = '';

            return alert('Invoice number already exists, please provide a unique invoice number');
        }
    }

    if (invoiceNumberValue != '' && invoiceDescrValue != '' && invoicePriceValue != '' && invoicePriceValidaiton(invoicePriceValue) == true) {

        const invoice = new Invoice(invoiceNumberValue, invoiceDescrValue, invoicePriceValue);

        invoiceList.push(invoice);

        localStorage.setItem('invoices', JSON.stringify(invoiceList));
        
        invoiceNumber.value = '';
        invoiceDescr.value = '';
        invoicePrice.value = '';

        render();
    }else {
        alert('Please note that you cannot subbit an invoice with epmty fields, also your invoice price should contain only numbers')
    }
});

function render() {
    const contentElemnt = document.getElementById('content');
    contentElemnt.innerHTML = '';

    let invoiceListLS = JSON.parse(localStorage.getItem('invoices'));

    if (invoiceListLS == null) {
        invoiceListLS = [];
    }

    invoiceListLS = invoiceListLS.map((x) => {
        return new Invoice(x.invoiceNr, x.invoiceDesc, x.invoicePrice);
    })

    for(let i=0; i< invoiceListLS.length; i++) {
        const html = invoiceListLS[i].generateHTML();
        contentElemnt.appendChild(html);
    }
}

// Check if invoice Nr is only a number
function invoicePriceValidaiton(valid) {
    const numberOnly = /^(?=.*[0-9])/;
    if(valid.match(numberOnly)) 
    { 
    return true;
    }
else
    { 
    return false;
}
}

const btnLogOutJS = document.getElementById('btnLogOut');
btnLogOutJS.addEventListener('click', () => {

    const invoiceNumber = document.getElementById('invoiceNr');        
    const invoiceDescr = document.getElementById('invoiceDescr');
    const invoicePrice = document.getElementById('invoicePrice');

    invoiceNumber.value = '';
    invoiceDescr.value = '';
    invoicePrice.value = '';

    activePanel(0);
})


// Session ==========================================================================================================================================

if (localStorage.getItem('session') == 'panel2') {
    activePanel(1)
} else if (localStorage.getItem('session') == 'panel3') {
    activePanel(2);
    render ();
}

function closeBrowser () {


    const activePanel = document.getElementsByClassName('active')[0].id;


    localStorage.setItem('session', activePanel);

}