function obterDadosDaAPI() {
    return new Promise((resolve, reject) => {
        fetch('https://api.exemple;com/data')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}

async function buscarDados() {
    try {
        const data = await obterDadosDaAPI();
        console.log(data);
    } catch (error) {
        console.error("Erro ao buscar dados", error);
    }
}

buscarDados();