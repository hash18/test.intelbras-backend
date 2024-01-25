import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { Token } from '../entities/Token.entity';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
    private readonly userService: UserService,
    /**resolvendo dependencia circular entre serviços, um está chamando o outro */
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async saveToken(hash: string, username: string) {
    const objToken = await this.tokenRepository.findOne({
      where: { username },
    });
    if (objToken) {
      this.tokenRepository.update(objToken.id, {
        hash: hash,
      });
    } else {
      this.tokenRepository.save({
        hash: hash,
        username: username,
      });
    }
  }

  async refreshToken( data: string ) {
    
    const objToken = await this.tokenRepository.findOne({
      where: { hash: data },
    });
    console.log(objToken)
    if (objToken) {
      const user = await this.userService.findByUsername(objToken.username);
      return this.authService.login(user);
    } else {
      return new HttpException(
        {
          errorMessage: 'Token Inválido',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
