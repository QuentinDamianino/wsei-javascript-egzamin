  document.addEventListener("DOMContentLoaded", function() {
    const shoppingList = document.getElementById("shopping-list");
    const button_one = document.getElementById("button-1");
    const button_two = document.getElementById("button-2");
    const button_three = document.getElementById("button-3");

    button_one.addEventListener("click", function() {
        const li = document.createElement("li");
        li.textContent = "chleb";
        shoppingList.appendChild(li);
    })

    button_two.addEventListener("click", function() {
        shoppingList.children[shoppingList.children.length-1].remove();
    })

    button_three.addEventListener("click", function() {
        const lastEl = shoppingList.children[shoppingList.children.length-1].cloneNode(true);
        shoppingList.appendChild(lastEl);
    })
})