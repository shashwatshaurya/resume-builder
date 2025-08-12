import {
  Controller,
  Post,
  Body,
  UseGuards,
  Session,
  BadRequestException,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SessionGuard } from "@/shared/guards/session.guards";
import { UserValidator } from "@/shared/validators/user.validator";

@UseGuards(SessionGuard)
@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userValidator: UserValidator
  ) {}

  @Post("login")
  async login(@Body() loginData: any, @Session() session: any) {
    const errors = this.userValidator.validateUserData(loginData);
    if (errors.length) {
      throw new BadRequestException(errors.join(", "));
    }
    const sessionVal = await this.authService.login(loginData);
    if (!sessionVal) {
      throw new BadRequestException("Invalid credentials");
    }
    session.value = sessionVal.access_token;
    return;
  }

  @Post("register")
  async register(@Body() userData: any) {
    const validationErrors = this.userValidator.validateUserData(userData);
    if (validationErrors.length) {
      throw new BadRequestException(validationErrors);
    }
    return this.authService.register(userData);
  }
}
