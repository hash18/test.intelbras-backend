import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';
import { AuthService } from '../auth/auth.service';

describe('1- UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    const user = Repository<User>;
    userService = new UserService(user as any);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
});
describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  let authService: AuthService;

  beforeEach(async () => {
    controller = new UserController(userService, authService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
