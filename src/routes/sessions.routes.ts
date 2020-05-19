import { Router } from 'express';
import CreateSessionService from '../services/CreateSessionService';

const SessionsRouter = Router();

SessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const createUser = new CreateSessionService();

    const { user } = await createUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default SessionsRouter;
