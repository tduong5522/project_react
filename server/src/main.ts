import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp, cert } from 'firebase-admin/app';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
initializeApp({
  credential: cert(serviceAccount),
});

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FE_CLIENT,
    credentials: true,
  });
  await app.listen(3003);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
