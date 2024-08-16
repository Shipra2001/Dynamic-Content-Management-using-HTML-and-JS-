document.addEventListener('DOMContentLoaded', function () {
    const itemNameInput = document.getElementById('item-name');
    const itemQuantityInput = document.getElementById('item-quantity');
    const addItemButton = document.getElementById('add-item');
    const shoppingList = document.getElementById('shopping-list');

    function createListItem(name, quantity) {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'shopping-list-item';

        // Create a span to hold the item details
        const itemDetails = document.createElement('span');
        itemDetails.className = 'item-details';
        itemDetails.textContent = `${name} - Quantity: ${quantity}`;
        listItem.appendChild(itemDetails);

        // Create the Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            const newName = prompt('Edit item name:', name);
            const newQuantity = prompt('Edit quantity:', quantity);
            if (newName && newQuantity) {
                itemDetails.textContent = `${newName} - Quantity: ${newQuantity}`;
            }
        });

        // Create the Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            shoppingList.removeChild(listItem);
        });

        // Add buttons to a button group
        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';
        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(removeButton);

        listItem.appendChild(buttonGroup);

        return listItem;
    }

    addItemButton.addEventListener('click', function () {
        const itemName = itemNameInput.value.trim();
        const itemQuantity = itemQuantityInput.value.trim();

        if (itemName && itemQuantity) {
            const listItem = createListItem(itemName, itemQuantity);
            shoppingList.appendChild(listItem);

            // Clear input fields
            itemNameInput.value = '';
            itemQuantityInput.value = '';
        } else {
            alert('Please enter both item name and quantity.');
        }
    });
});
