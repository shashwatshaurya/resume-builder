import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CryptoUtil } from "@/shared/utils/crypto.utils";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  /**
   * Finds all users
   * @returns All users
   */
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  /**
   * Finds a user by ID or email
   * @param id User ID
   * @param email User email
   * @returns User or null if not found
   */
  async findOne(id?: number, email?: string): Promise<User | null> {
    const query: { id?: number; email?: string } = {};
    if (id) {
      query.id = id;
    }
    if (email) {
      query.email = email;
    }
    return this.usersRepository.findOneBy(query);
  }

  /**
   * Creates a new user
   * @param user User object
   * @returns Created user
   */
  async create(user: User): Promise<User> {
    const existingUser = await this.usersRepository.findOneBy({
      email: user.email,
    });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await CryptoUtil.hashPassword(user.password);
    user.password = hashedPassword;
    return this.usersRepository.save(user);
  }

  /**
   * Updates a user
   * @param id User ID
   * @param email User email
   * @param body User object
   * @returns Updated user
   */
  async update(
    id?: number,
    email?: string,
    body: Partial<User> = {}
  ): Promise<User | null> {
    const user = await this.findOne(id, email);
    if (!user) {
      throw new Error("User not found");
    }

    // Get the user ID
    id = user.id;

    // Handle password update separately
    if (body.password) {
      const hashedPassword = await CryptoUtil.hashPassword(user.password);
      body.password = hashedPassword;
    }

    // Update user with new values
    const updatedUser = {
      ...user,
      ...body,
    };

    await this.usersRepository.update(id, updatedUser);
    return this.findOne(id);
  }

  /**
   * Deletes a user
   * @param id User ID
   */
  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
