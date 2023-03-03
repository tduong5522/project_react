import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
@Controller('login')
export class LoginController {
  @Post()
  checkLogin(@Req() req: Request, @Res() res: Response): any {
    const { username, password } = req.body;
    if (username === undefined || password === undefined) {
      return res.status(HttpStatus.BAD_REQUEST);
    }
    if (username === 'admin' && password === '1234567890') {
      const newToken = jwt.sign({ username, password }, 'secret_ahihi');
      return res
        .status(HttpStatus.OK)
        .cookie('token', newToken, { secure: true, sameSite: 'strict' })
        .json({ status: 'success' });
    }
    return res.status(HttpStatus.OK).json({ status: 'fail' });
  }
}
