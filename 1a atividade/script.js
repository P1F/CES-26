const randomTop = function(){
    return Math.random() * 90;
}

const randomLeft = function(){
    return Math.random() * 94;
}

const addItem = function(item){
    const input = document.createElement('input');
    input.type = 'checkbox';
    const label = document.createElement('label');
    label.innerHTML = item;
    const button = document.createElement('button');
    button.className = "delete";
    button.innerHTML = "deletar";

    const li = document.createElement('li');
    li.className = "task";
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button);

    button.onclick = function(){
        this.parentNode.remove();
    }
    input.onclick = function(){
        this.parentNode.classList.toggle('checked');
    }
    
    return li;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#submit').onclick = function(){
        const item = document.querySelector('#textbox');
        const list = document.querySelector('#todoList > ul');
        if (item.value == ''){
            alert("Tarefa nao pode estar vazio!");
        } else {
            list.appendChild(addItem(item.value));
            item.value = '';
            item.select();
        }
    }

    document.querySelector('#share').onmouseover = function(){
        this.style.top = `${randomTop()}%`;
        this.style.left = `${randomLeft()}%`;
    }

    document.querySelector('#copyright').onclick = function(){
        this.style.top = "90%";
    }
});