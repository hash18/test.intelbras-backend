import { Module, forwardRef } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { Token } from '../entities/Token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Token]),
    /**resolve problema de dependencia circular entre modulos */
    forwardRef(() => AuthModule),
    UserModule,
  ],
  controllers: [TokenController],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}
