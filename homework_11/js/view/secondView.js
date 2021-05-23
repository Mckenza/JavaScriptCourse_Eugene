// View данных об 10 юзерах
class View{
    constructor(){}

    // Данные об 10 юзерах
    showInfoUsers(data){
        const maintable = document.getElementById('main_table');

        data.map((item)=>{
            const tr = document.createElement('tr');

            const tdName = document.createElement('td');
            tdName.textContent = item['name'];
            const tdUsername = document.createElement('td');
            tdUsername.textContent = item['username'];
            const tdEmail = document.createElement('td');
            tdEmail.textContent = item['email'];
            tr.setAttribute('id', item['id']);
            
            tr.appendChild(tdName);
            tr.appendChild(tdUsername);
            tr.appendChild(tdEmail);

            maintable.appendChild(tr);
        })
    }
}

export {View};