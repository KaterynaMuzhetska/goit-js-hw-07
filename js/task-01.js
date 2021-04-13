const categories = document.getElementById('categories');
const items = categories.getElementsByClassName('item');

for (let item of items) {
    const title = item.getElementsByTagName('h2');
    const uls = item.getElementsByTagName('ul');
    
    console.log ('Категория:' + ' ' + title[0].innerHTML)

    for (let ul of uls) {
        const length = ul.getElementsByTagName('li').length;

        console.log ('Количество элементов:' + ' ' + length)
    }
    
}
