// variáveis
let enderecoLocal = '';
let dadosLocal = '';
let methodLocal = '';

let connector = {
    interceptor: async function(endereco, dados, method) {
        enderecoLocal = endereco;
        methodLocal = method;

        let requestOptions = {};
        if (dados) {
            dadosLocal = dados;

            requestOptions = {
                method: method,
                mode: 'cors',
                // headers: { 'x-auth-token': user.token },
                body: JSON.stringify(dados),
            };
        } else {
            dadosLocal = null,

                requestOptions = {
                    method: method,
                    mode: 'cors',
                    // headers: { 'x-auth-token': user.token },
                };
        }

        return fetch(`${endereco}`, requestOptions)
            .then(this.handleErrors)
            .then(function (data) {
                return data.json().then((dado) => {
                    // console.log(dado);
                    return dado;
                });
            })
            .catch(error => console.log(`Erro no interceptor do get: ${error}`));
    },
    handleErrors: async function(response) {
        if (!response.ok) {
            if (response.status == 401) {
                if (localStorage.user != undefined) {
                    console.log('token expirado, tentando com o refresh_token');
                    throw Error(response.statusText);
                } else {
                    // aqui é a segunda vez que deu erro 401, logo até o refresh_token deu errado
                    logout(response.statusText);
                    throw Error(response.statusText);
                }
            }
        }
        return response;
    }
}


// function connector(endereco, dados, method) {
//     enderecoLocal = endereco;
//     methodLocal = method;

//     let requestOptions = {};
//     if (dados) {
//         dadosLocal = dados;

//         requestOptions = {
//             method: method,
//             mode: 'cors',
//             // headers: { 'x-auth-token': user.token },
//             body: JSON.stringify(dados),
//         };
//     } else {
//         dadosLocal = null,

//             requestOptions = {
//                 method: method,
//                 mode: 'cors',
//                 // headers: { 'x-auth-token': user.token },
//             };
//     }

//     return fetch(`${endereco}`, requestOptions)
//         .then(handleErrors)
//         .then(function (data) {
//             return data.json().then((dado) => {
//                 // console.log(dado);
//                 return dado;
//             });
//         })
//         .catch(error => console.log(`Erro no interceptor do get: ${error}`));
// }

// function handleErrors(response) {
//     if (!response.ok) {
//         if (response.status == 401) {
//             if (localStorage.user != undefined) {
//                 console.log('token expirado, tentando com o refresh_token');
//                 throw Error(response.statusText);
//             } else {
//                 // aqui é a segunda vez que deu erro 401, logo até o refresh_token deu errado
//                 logout(response.statusText);
//                 throw Error(response.statusText);
//             }
//         }
//     }
//     return response;
// }

export default connector;