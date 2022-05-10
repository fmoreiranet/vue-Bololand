import { Produto } from "@/models/Produto";
import { http } from "@/services/config";

export default {

    list: function() {
        return http.get("produto/list");
    },

    get: function(id) {
        return http.get("produto/get/" + id);
    },

    add: function(dadosProduto = Produto) {
        console.log(dadosProduto);
        return http.post("produto/add", dadosProduto);
    },

    upload: function(files) {
        console.log(files);
        return http.post("produto/upload", files);
    }
};