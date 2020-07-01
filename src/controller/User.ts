import * as Koa from 'koa';
import Router from 'koa-router';
import { getRepository, Repository } from 'typeorm';

import UserEntity from '../entity/User';
import { ObjectId } from 'mongodb';

const routerOpts: Router.IRouterOptions = {
  prefix: '/users',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx:Koa.Context) => {
  const usersRepo:Repository<UserEntity> = getRepository(UserEntity);
  const users = await usersRepo.find();

  ctx.body = {
    data: { users },
  };
});

router.get('/:id', async (ctx:Koa.Context) => {
  const usersRepo:Repository<UserEntity> = getRepository(UserEntity);
  const user = await usersRepo.findOne(ctx.params.id);

  ctx.body = {
    data: { user },
  };
});

router.post('/', async (ctx:Koa.Context) => {
  const usersRepo:Repository<UserEntity> = getRepository(UserEntity);
  const user = usersRepo.create(ctx.request.body);

  try {
    await usersRepo.save(user);
    ctx.body = {
      data: { user },
    };
  } catch(e) {
    ctx.body = { error: 'Invalid data.  name, email, dob are required' }
  }
 
});

router.delete('/:id', async (ctx:Koa.Context) => {
  const usersRepo:Repository<UserEntity> = getRepository(UserEntity);
  const user = await usersRepo.findOne(ctx.params.id);

  let response = { msg:  'User not found' };

  if( user ) {
    await usersRepo.delete(user);
    response = { msg: 'User deleted' }
  }

  ctx.body = response;
});

router.put('/:id', async (ctx:Koa.Context) => {
  const usersRepo:Repository<UserEntity> = getRepository(UserEntity);
  const user = await usersRepo.findOne(ctx.params.id);

  let response = { msg:  'User not found' };

  if( user ) {
    const updatedUser = await usersRepo.merge(user, ctx.request.body);
    usersRepo.save(updatedUser);

    response = { msg: 'User updated' };
  }

  ctx.body = response;
});

export default router;