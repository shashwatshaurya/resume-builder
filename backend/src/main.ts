import { NestFactory } from "@nestjs/core";
import session from "express-session";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions = {
    origin: process.env.FRONTEND_URL, // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };
  const sessionOptions = {
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: Number(process.env.MAX_AGE), // Session expiration time (1 day)
      secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: "strict" as "strict",
      httpOnly: true,
    },
  };
  app.enableCors(corsOptions); // Enable CORS for frontend integration
  app.use(session(sessionOptions));
  await app.listen(process.env.BACKEND_PORT || 3001);
}
bootstrap();
