import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

import { UsersService } from 'src/users/services/users.service'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username)
    const isPasswordValid = await this.decryptPassword(pass, user.password)
    if (user && isPasswordValid) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async getUserInfo(username: string): Promise<any> {
    const user = await this.usersService.findOne(username)
    if (user) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.userId,
      userType: user.userType,
    }
    const currentUser = await this.getUserInfo(user.username)
        return {
      access_token: this.jwtService.sign(payload),
      user: currentUser
    }
  }

  async decryptPassword(password: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hash)
    return result
  }
}
