import { Injectable } from "@nestjs/common";
import { User } from "@/entities/users/user.entity";

@Injectable()
export class UserValidator {
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    // Add your password validation rules
    return password.length >= 8;
  }

  validateUserData(
    userData: Partial<User>,
    ignoreName: boolean = true
  ): Record<string, string>[] {
    const errors: Record<string, string>[] = [];

    if (!ignoreName && (!userData.firstName || !userData.lastName)) {
      errors.push({
        firstName: "First name is required",
        lastName: "Last name is required",
      });
    }

    if (userData.email && !this.validateEmail(userData.email)) {
      errors.push({ email: "Invalid email format" });
    }

    if (userData.password && !this.validatePassword(userData.password)) {
      errors.push({ password: "Password must be at least 8 characters" });
    }

    return errors;
  }
}
