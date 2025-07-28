import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ValidationPipe } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle("Pet project of drugs")
    .setDescription("API documentation of all entpoint")
    .setVersion("1.0.0")
    .setContact("Kirill Krishtopenko, Syoma Zverev", "https://github.com/kirnisa/pet", "krishtopenko01@gmail.com")
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup("/swagger", app, document)

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
