import {
  Controller,
  Post,
  Body,
  Request,
  Param,
  Put,
  UseGuards,
  Get,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { User } from '../entities/User.entity';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
    //return req.user;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(+id);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }*/
  @Patch('soft-delete/:id')
  async updateTimestamp(@Param('id') id: string): Promise<User> {
    return this.userService.updateTimestamp(+id);
  }
}
