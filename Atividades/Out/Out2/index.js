
import express from 'express'

const router =express()
const port = 3000

router.use(express.json())

function registrarlog(req, res, next)
{
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarlog)

let itens = [{id:1, nome:"Arroz", quantidade:2}]

router.get("/itens", (req, res)=>{
    res
})

router.listen(port, ()=>{
       console.log(`Porta Rodando em ${port}`)
})

function validarItem(req, res, next){
    if(!req.body.nome || !req.body.quantidade){
        return res.status(400).send({erro: "Informe nome e quantidade"})
    }
    next()
}
//========== Post ========

router.post("/itens", validarItem, (req, res) =>{
    let id = 1
    if(itens.length > 0)
    {
        id = itens[itens.length - 1].id + 1
    }
    let item ={id:id, nome:nome, quantidade:quantidade}
    itens.push(item)
    res.status(201).send(item)
})

//========== DELETE ========

function verificarSenha(req, res, next){
    if(req.header.senha !== "lions123")
    {
       return res.status(401).send ({erro: "Autorização Negada"})
    }
    next()
}

router.delete("itens/:id", verificarSenha, (req, res) => {
    let id = req.params.id
    let indice = itens.findIndex((item) => item.id === id)

    
     if(indice === -1)
     {
       return res.status(404).send({erro:"Item não encontrado"})
     }
    itens.splice(indice, 1)
    res.send({mensagem: "Item temovido"})
})


router.listen(port, ()=>{
       console.log(`Porta Rodando em ${port}`)
})
