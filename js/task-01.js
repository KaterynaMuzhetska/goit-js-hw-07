const categoriesEl = document.querySelectorAll('.item');
console.log('В списке' + ' ' + categoriesEl.length + ' категории.');

for (let item of categoriesEl) {
    const title = item.getElementsByTagName('h2');
    const uls = item.getElementsByTagName('ul');
    
    console.log ('Категория:' + ' ' + title[0].innerHTML)

    for (let ul of uls) {
        const length = ul.getElementsByTagName('li').length;

        console.log ('Количество элементов:' + ' ' + length)
    }
    
}

