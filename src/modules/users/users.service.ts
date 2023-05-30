import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository, UpdateResult } from 'typeorm'
import * as bcrypt from 'bcrypt'

import { UserInterface } from '../../database/interfaces/user.interface'
import { UserEntity } from 'src/database/entities/User.entity'

export type User = any

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(user: UserInterface, userIp: string): Promise<User> {
    user.userIp = userIp
    const encryptedPassword = await this.encryptPassword(user.password)
    user.password = encryptedPassword
    user.cellPhone = Number(user.cellPhone)
    // Here we are making sure that a user type is passed in the request body.  If it is not, we are setting it to 'user' by default and preventing the user from adding something other than 'user' or 'admin' to the request body.
    if (
      user.userType.toLowerCase() != 'admin' &&
      user.userType.toLowerCase() != 'user'
    ) {
      user.userType = 'user'
    }
    // Here we are checking to see if the user is trying to create an admin user.  They may be attempting to do this by manually adding 'admin' to a request body via Postman or another service.  This is a security measure to prevent unauthorized users from gaining admin access.
    if (user.userType.toLowerCase() === 'user') {
      try {
        await this.userRepository.save(user)
        return `User ${user.username} created successfully`
      } catch (error) {
        if (error.code === '23505') {
          // This would have an error.detail of Key (username)=(xxxxxx) already exists.

          return 'Username already exists'
        }
        // This implies that the error is not a duplicate username
        return 'Something went wrong'
      }
    } else {
      return "Sneaky little devil you are ... You cannot just add 'admin' to the request and expect to gain admin access.  This must be done manually by the dev team.  No registration for you!"
    }
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } })
  }

  async findById(userId: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { userId } })
  }

  async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)
    return hash
  }

  async getUserAnalytics(): Promise<string> {
  // This is the query that will be used to get the user analytics.  It is currently a work in progress.
  //  Thinking about using one single query to get all user information and then using the data to create the analytics.
  
  //   const entityManager = getManager()
  //   const query = `
  //   WITH userAndProject AS (
  //     SELECT
  //       COUNT(projects.name) as projectCount
  //     FROM
  //       users
  //     JOIN
  //       projects ON CAST(users."userId" AS VARCHAR) = projects."userId"
  //   )
  //   SELECT *
  //   FROM userAndProject;
  // `

  //   const results = await entityManager.query(query)
    return 'no results yet ... still under construction'
    // return results[0]
  }
}
