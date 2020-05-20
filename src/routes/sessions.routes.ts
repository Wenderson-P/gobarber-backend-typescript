import { Router } from 'express';
import CreateSessionService from '../services/CreateSessionService';

const SessionsRouter = Router();

SessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const createUser = new CreateSessionService();

  const { user, token } = await createUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default SessionsRouter;
