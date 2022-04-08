import {Router} from 'express'
const router = Router()

import {getUsers, createUser, getUser, updateUser, deleteUser} from '../controllers/user.crontroller'

router.get('/users', getUsers);
router.post('/users', createUser);
router.post('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router