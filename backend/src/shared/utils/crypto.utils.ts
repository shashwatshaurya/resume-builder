import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "./constants";

export class CryptoUtil {
  private static readonly SALT_ROUNDS = SALT_ROUNDS;

  /**
   * Hashes a password using bcrypt
   * @param password Plain text password
   * @returns Hashed password
   */
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.SALT_ROUNDS);
  }

  /**
   * Compares a plain text password with a hash
   * @param password Plain text password
   * @param hash Hashed password
   * @returns Boolean indicating if passwords match
   */
  static async comparePassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  /**
   * Generates a random string of a given length
   * @param length Length of the string to generate
   * @returns Random string
   */
  static generateRandomString(length: number): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
}
