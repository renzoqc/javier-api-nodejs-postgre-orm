import {Request, Response} from 'express'
import {getRepository} from 'typeorm' //trae una tabla de una DB
import {User} from '../entity/User'

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find(); //es como un select * from
    return res.json(users);
}

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {   
    const newUser = getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results)
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {   
    const user = await getRepository(User).findOne(req.params.id)
    if(user) {
        getRepository(User).merge(user, req.body); //merge permite actualizar los datos pero no los guarda
        const results = await getRepository(User).save(user); //se guarda en la DB
        return res.json(results);
    }
    return res.status(404).json({msg: 'Not User found'});
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);
    return res.json(results);
}