const input = document.querySelector('input');
const btn = document.querySelector('.addButton');

btn.onclick = () => {
    const list = document.createElement('li');
    list.innerHTML = input.value;
    document.querySelector('ul').appendChild(list);
    input.value = "";
    // hhcdfdfk
    list.style.backgroundColor = '#BAE5FE';
    list.style.marginTop = '15px';
    list.style.padding = '8px 0 8px 0';
    list.style.borderRadius = '8px';
    list.style.display = 'flex';
    list.style.justifyContent = 'space-between';
    list.style.alignItems = 'center';

    const remBtn = document.createElement('button');

    remBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    remBtn.style.border = 'none';
    remBtn.style.borderRadius = '8px';
    remBtn.style.backgroundColor = 'blue';
    remBtn.style.color = 'white';
    remBtn.style.padding = '8px 12px';

    list.appendChild(remBtn);

    remBtn.onclick = () => {
        list.remove();
    };
    
    list.ondblclick = () => {
        list.style.textDecoration = 'line-through';
    };
};