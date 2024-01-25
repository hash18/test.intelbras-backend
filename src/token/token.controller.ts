import { Controller, Body, Put } from '@nestjs/common';
import { TokenService } from './token.service';
import { RefreshTokenDto } from '../dto/token/refresh-token.dto';

@Controller('token')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Put('refresh')
  async refreshToken(@Body() data: RefreshTokenDto) {
    return this.tokenService.refreshToken(data.oldToken);
  }
}
