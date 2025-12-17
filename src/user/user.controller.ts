import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import type { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {

  /**
   * GET /users/me
   * Ambil data user yang sedang login
   * (Protected Endpoint)
   */
  @Get('me')
  getProfile(@Req() req: Request) {
    return req.user;
  }

  @Roles('ADMIN')
  @Get('admin-only')
  adminOnly() {
    return { message: 'Hello Admin 👑' };
  }
}
