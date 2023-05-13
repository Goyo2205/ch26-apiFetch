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

const date = new Date();
const minute = date.getMinutes();
console.log(minute);

if (sessionStorage.getItem('minute') == minute){
    const data = JSON.parse(sessionStorage.getItem('Datos'));
    console.log(data)
}else{
    const data = getData(url)
    console.log('la data')
    console.log(data)
    sessionStorage.setItem('minute',minute);
}

