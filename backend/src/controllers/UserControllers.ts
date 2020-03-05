import { Request, Response } from 'express'

const users = [
    { 
        name : "Mauro",
        email : "josemauromani@gmail.com",
        telefone : "14998408221"
    }
]

export default {
    async index(req : Request,res : Response) {
        return res.json(users)
    }
}