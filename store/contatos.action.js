export const ADD_CONTATO = "ADD_CONTATO";

export const addContato = (nomeContato, telefoneContato, imagemURI) => {
    return {
        type: ADD_CONTATO,
        dadosContato: {
            nomeContato: nomeContato,
            telefoneContato: telefoneContato,
            imagemURI: imagemURI
        }
    }
};