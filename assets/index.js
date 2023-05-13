console.log('Iniciamos tarea API Fetch');
const url = 'https://reqres.in/api/users?delay=3';
const contentH1 = document.querySelector('contentH1');

const getData = async (url) => {
    try{
        const users = await fetch(url);
        console.log('step 1 ready')
        const info = await users.json();
        console.log('step 2 ready')
        const data = info.data;
        console.log('step 3 ready')
        console.log(data);
    }
    catch{
        handleError;
    }
    return data;
}



function handleError(err) {
    console.log('OH NO!');
    console.log(err);
    contentH1.textContent = `Algo salió mal: ${err}` //n no estaba definido
}

const data = getData(url)

setTimeout(() => {},10000);