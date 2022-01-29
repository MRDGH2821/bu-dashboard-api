import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthUser } from 'src/utils/decorators';
import { User } from 'src/utils/fireorm/entities/User';
import { ROUTES } from '../../utils/constants';
import { AuthenticatedGuard, DiscordAuthGuard } from '../utils/Guards';

@Controller(ROUTES.AUTH)
export class AuthController {
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {}

  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost/menu');
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status(@AuthUser() user: User) {
    //return { msg: 'Authenticated' };
    return user;
  }

  @Post('logout')
  logout() {}
}
