import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    { 
        name : "José Mauro",
        email : "josemauromani@gmail.com",
        telefone : "14998408221"
    }
]

export default {

    async index(req : Request,res : Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail(
            {
                name : 'José Mauro',
                email : 'josemauromani@gmail.com'
            },
            {
                body : 'seja bem vindo ao nosso app',
                subject : 'Cadastro no APP'
            }
        )
        res.send('Usuario criado')            
    }
    
}