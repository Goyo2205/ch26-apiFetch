console.log('Iniciamos tarea API Fetch');
const url = 'https://reqres.in/api/users?delay=3';
const contentH1 = document.querySelector('contentH1');

const getData = async (url) => {
    try{
        const users = await fetch(url);
        const info = await users.json();
        const data = info.data;
        console.log(data);
        sessionStorage.setItem('Datos', JSON.stringify(data));
        for(let i=0;i < 6;i++){
            addRow('dataTable', data[i]);
        }
    }
    catch{
        handleError;
    }
}
function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    contentH1.textContent = `Algo salió mal: ${err}` //n no estaba definido
}
function addRow(containerId,data){
    const container = document.getElementById(containerId);
    const row = document.createElement('div');
    row.classList.add('row');
    
    row.innerHTML = `
    <div class="col-1">${data.id}</div>
    <div class="col-2">${data.first_name}</div>
    <div class="col-2">${data.last_name}</div>
    <div class="col-5">${data.email}</div>
    <div class="col-2" '>
    <img src='${data.avatar}' alt=''>
    </div>
    `;

    container.appendChild(row);
}

const date = new Date();
const minute = date.getMinutes();
console.log(minute);

let data = {}

if (sessionStorage.getItem('minute') == minute){
    data = JSON.parse(sessionStorage.getItem('Datos'));
    for(let i=0;i < 6;i++){
        addRow('dataTable', data[i]);
    }
}else{
    data = getData(url);
    sessionStorage.setItem('minute',minute);
};




