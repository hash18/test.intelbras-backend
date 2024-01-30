import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Configuração de CORS
    const corsOptions: CorsOptions = {
      origin: 'http://localhost:5000', // Ou a origem do seu aplicativo React
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type,Authorization',
    };
    app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle('API Intelbras')
    .setDescription('Sistema de demostração')
    .setVersion('1.0')
    .addTag('Intelbras')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
