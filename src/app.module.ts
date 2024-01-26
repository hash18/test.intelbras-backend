import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';
import { ComponentModule } from './component/component.module';
import { SegmentTypeModule } from './segment-type/segment-type.module';
import { ComponentGroupModule } from './component-group/component-group.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    TokenModule,
    UserModule,
    ComponentModule,
    SegmentTypeModule,
    ComponentGroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
