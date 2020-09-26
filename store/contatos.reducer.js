import Contato from "../modelo/Contato";
import { ADD_CONTATO } from "./contatos.action";

const estadoInicial = {
    contatos: [],
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            const dados = new Contato(new Date().toString(),
                action.dadosContato.nomeContato,
                action.dadosContato.telefoneContato,
                action.dadosContato.imagemURI
            );
            return {
                contatos: estado.contatos.concat(dados)
            }
        default:
            return estado;
    }
}