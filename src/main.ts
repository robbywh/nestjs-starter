import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { LoggerService } from './core/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // add global validation pipe
  await app.listen(3000);
}
bootstrap();
