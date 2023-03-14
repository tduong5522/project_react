import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { LoginService } from './login.service';
@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  async checkLogin(@Req() req: Request, @Res() res: Response): Promise<any> {
    const { username, password } = req.body;
    if (username === undefined || password === undefined) {
      return res.status(HttpStatus.BAD_REQUEST);
    }
    const userLogin = await this.loginService.login({
      username,
      password,
    });
    console.log(userLogin, username, password);
    if (userLogin) {
      const newToken = jwt.sign({ username, password }, 'secret_ahihi');
      return res
        .status(HttpStatus.OK)
        .cookie('token', newToken, { secure: true, sameSite: 'strict' })
        .json({ status: 'success', user: userLogin });
    }
    return res.status(HttpStatus.OK).json({ status: 'fail', user: {} });
  }
}
