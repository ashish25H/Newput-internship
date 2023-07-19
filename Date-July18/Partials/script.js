
const data = {
    items: [
        { name: "Apples", quantity: 5 },
        { name: "Bananas", quantity: 8 },
        { name: "Milk", quantity: 2 },
        { name: "Eggs", quantity: 12 },
    ],
};


const itemPartial = `
    <li>
        {{ quantity }} x {{ name }}
    </li>
`;


function renderShoppingList(data) {
    const template = `
        <ul>
            {{#items}}
                {{> itemPartial}}
            {{/items}}
        </ul>
    `;
    const partials = { itemPartial: itemPartial };
    const rendered = Mustache.render(template, data, partials);
    document.getElementById('shoppingList').innerHTML = rendered;
}

renderShoppingList(data);
