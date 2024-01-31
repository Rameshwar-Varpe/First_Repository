const taxes = {
    sgst : 5.3,
    cgst : 4.7
};

const roti = {
    itemName: "roti",
    itemPrice: 8,
    itemType: "wheat"
};

const dal = {
    itemName: "dal",
    itemPrice: 40,
    itemType: "lush green"
};

const rice = {
    itemName: "rice",
    itemPrice: 30,
    itemType: "rice"
};

const chinese = {
    itemName: "chinese",
    itemPrice: 100,
    itemType: "maida"
};

const paneer = {
    itemName: "paneer",
    itemPrice: 120,
    itemType: "milk"
};

let order = {
    items : [
        {
            itemName: "paneer",
            qantity: 1
        },
        {
            itemName: "dal",
            qantity: 2
        },
        {
            itemName: "rice",
            qantity: 2
        }
    ]
};

let grandTotal = 0;

function itemTotal(itemName){
    for(i = 0; i < order.items.length; i++){
        if(itemName === order.items[i].itemName){
            total = eval(itemName).itemPrice * order.items[i].qantity;
            grandTotal += total;
            return total;
        }
    }
}

function payableAmount(){
    let sGst = grandTotal / 100 * taxes.sgst;
    let cGst = grandTotal / 100 * taxes.cgst;

    return grandTotal + sGst + cGst;
}

function sGst(){
    return grandTotal / 100 * taxes.sgst;
}

function cGst(){
    return grandTotal / 100 * taxes.cgst;
}



function addItem(itemName,qantity){
    
}


function generateBill(){
    console.log("********************* Hotel Maharaja *********************");
    console.log("S/N      Item Name      Price      Quantity      Item Total");
    for(i = 0; i < order.items.length; i++){
    console.log(` ${i+1}        ${order.items[i].itemName}        ${eval(order.items[i].itemName).itemPrice}       ${order.items[i].qantity}        ${itemTotal(order.items[i].itemName)}`);
    }
    console.log("                            Sub Total : ",grandTotal);
    console.log(`                          SGST(${taxes.sgst} %) : `,sGst());
    console.log(`                          CGST(${taxes.cgst} %) : `,cGst());
    console.log("**********************************************************");
    console.log("                        Payable Amount: ",payableAmount());



}
generateBill();