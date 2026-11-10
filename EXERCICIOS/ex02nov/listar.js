import mongoose from "../conexao.js";
import Post from "./Post.js";

let posts = await Post.find()

posts.forEach((post) => {
    console.log(`${post.titulo} | ${post.categoria} | ${post.autor.nome}`)
    //Acesso o array dentro do array | Post --> Cometarios
    post.comentarios.forEach((comentarios) => {
       console.log(`${comentarios.texto} ${comentarios.curtidas}`)
    })
})

await mongoose.disconect()