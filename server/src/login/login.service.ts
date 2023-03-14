import { Injectable } from '@nestjs/common';
import { getFirestore } from 'firebase-admin/firestore';
import { Login, User } from './login.interface';

@Injectable()
export class LoginService {
  private readonly users: Array<User> = [];
  private readonly db = getFirestore();

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  async login(account: Login): Promise<User> {
    const manage_user = await this.db.collection('manage_user');
    const snapshot = await manage_user
      .where('user', '==', account.username)
      .where('password', '==', account.password)
      .get();
    if (snapshot.empty) {
      return undefined;
    }
    let user;
    snapshot.forEach((doc) => {
      user = {
        uid: doc.id,
        ...doc.data(),
      };
    });
    return user;
  }
}
