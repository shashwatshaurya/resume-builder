import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./modules/auth/auth.module";
import { ResumeModule } from "./modules/resume/resume.module";
import { DatabaseModule } from "./modules/database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_URL as string,
      port: parseInt(process.env.DATABASE_PORT || "3306", 10),
      username: process.env.DATABASE_USER as string,
      password: process.env.DATABASE_PASSWORD as string,
      database: process.env.DATABASE_NAME as string,
      autoLoadEntities: true,
      synchronize: true,
    }),
    DatabaseModule,
    AuthModule,
    ResumeModule,
  ],
})
export class AppModule {}
