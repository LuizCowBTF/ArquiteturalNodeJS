import { Router, Request, Response, NextFunction } from 'express';
import StatusCodes from 'http-status-codes';

const usersRoute = Router();
/** */
//get /users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
   const users = [{ userName: 'Luiz Claudio' }];
   res.status(StatusCodes.OK).send(users);
});

export default usersRoute;


/** */
//get /users/:uuid
usersRoute.get('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
   const uuid = req.params.uuid;
   //dataBank.getUserByUUid(uuid);
   res.sendStatus(StatusCodes.OK);
});


/** */
//post /users
usersRoute.post('/users', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
   const newUser = req.body
   res.sendStatus(StatusCodes.CREATED).send(newUser);
});


/** */
//put /users/:uuid
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
   const uuid = req.params.uuid;
   const modifiedUser = req.body;

   modifiedUser.uuid = uuid;

   res.sendStatus(StatusCodes.OK).send({ uuid });
});



/** */
//delete /users/:uuid
usersRoute.delete('/users/:uuid', (req: Request <{ uuid: string }>, res: Response, next: NextFunction ) => {
   res.sendStatus(StatusCodes.OK);
});            

