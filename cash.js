// cashRegister object ( total, itemCount, add(itemCost), reset() )
const cashRegister = {
    total: 0,
    itemCount: 0,
    add(itemCost) {
        this.total += itemCost;
    },
    reset() {
        this.total = 0;
        this.itemCount = 0;
    }
};

// scan function ( for loop, parseFloat() calling cashREgister.add(), ul list )
function scan() {
    let itemCountInput = document.getElementById("itemCount").value;
    cashRegister.itemCount = parseInt(itemCountInput);
    let itemListElement = document.getElementById("itemList");

    if (isNaN(cashRegister.itemCount) || cashRegister.itemCount <= 0 || cashRegister.itemCount != itemCountInput) {
        alert("Invalid number of items. Please enter a positive, whole number.");
        document.getElementById("itemCount").value = "";
        return;
    }

    itemListElement.innerHTML = ""; 
    cashRegister.total = 0;

    for (let i = 0; i < cashRegister.itemCount; i++) {
        let itemCostInput = prompt(`Enter the cost for item ${i + 1}:`);

        if (itemCostInput === null) {
            alert("Cancelled.");
            break; 
        }

        let cost = parseFloat(itemCostInput);

    while (isNaN(cost) || cost < 0) {
            alert("Invalid price. Please enter a valid number.");
            itemCostInput = prompt(`Enter the cost for item ${i + 1}:`);
            cost = parseFloat(itemCostInput);
        }
        cashRegister.add(cost);
        let listItem = document.createElement("li");
        listItem.innerHTML = `Item ${i + 1}: $${cost.toFixed(2)}`;
        itemListElement.appendChild(listItem);
    }
}

// printTotal function 
function printTotal() {
    let totalOutputElement = document.getElementById("totalOutput");
    totalOutputElement.innerHTML = `$${cashRegister.total.toFixed(2)}`;
}

// reset function
function resetAll() {
    document.getElementById("itemCount").value = "";
    document.getElementById("itemList").innerHTML = "";
    document.getElementById("totalOutput").innerHTML = "$0.00";
    cashRegister.reset();
}

// event listeners 
document.getElementById("btnScan").addEventListener("click", scan);
document.getElementById("btnTotal").addEventListener("click", printTotal);
document.getElementById("btnReset").addEventListener("click", resetAll);
