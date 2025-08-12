import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class SessionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const session = request.session;

    if (request.path.startsWith("/auth")) {
      return true;
    }
    if (session && session.value) {
      return true;
    }

    throw new UnauthorizedException("No Valid User Session");
  }
}
