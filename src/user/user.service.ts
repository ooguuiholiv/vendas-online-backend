import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];
  async createUser(createUser: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await bcrypt.hash(createUser.password, saltOrRounds);
    console.log('passwordHashed ', passwordHashed);

    // criando os usuarios em memoria

    const user: UserEntity = {
      ...createUser,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(user);

    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.users;
  }
}
