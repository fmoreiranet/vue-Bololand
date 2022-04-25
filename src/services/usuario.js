import { http } from './config';

export default {
    list: () => {
        return http.get("usuario/list");
    },

    login: (dadosUsuario) => {
        // {
        // "usuario": "sc@email.com",
        //     "senha": "123@123"
        // }
        return http.post("usuario/logon", { data: dadosUsuario });
    }
}