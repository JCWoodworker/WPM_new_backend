import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { UserInterface } from '../../database/interfaces/user.interface';
import { UserEntity } from 'src/database/entities/User.entity';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(user: UserInterface): Promise<User> {
    const encryptedPassword = await this.encryptPassword(user.password);
    user.password = encryptedPassword;
    // Here we are making sure that a user type is passed in the request body.  If it is not, we are setting it to 'user' by default and preventing the user from adding something other than 'user' or 'admin' to the request body.
    if (
      user.userType.toLowerCase() != 'admin' &&
      user.userType.toLowerCase() != 'user'
    ) {
      user.userType = 'user';
    }
    // Here we are checking to see if the user is trying to create an admin user.  They may be attempting to do this by adding 'admin' to the request body.  This is a security measure to prevent unauthorized users from gaining admin access.
    if (user.userType.toLowerCase() === 'user') {
      try {
        await this.userRepository.save(user);
        return `User ${user.username} created successfully`;
      } catch (error) {
        if (error.code === '23505') {
          // This would have an error.detail of Key (username)=(xxxxxx) already exists.

          return 'Username already exists';
        }
        // This implies that the error is not a duplicate username
        return 'Something went wrong';
      }
    } else {
      return "Sneaky little devil you are ... You cannot just add 'admin' to the request and expect to gain admin access.  This must be done manually by the dev team.  No registration for you!";
    }
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findById(userId: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { userId } });
  }

  async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  }
}
