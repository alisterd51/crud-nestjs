import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorator/public.decorator';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Sign In' })
  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @ApiBody({
    type: SignInDto
  })
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.login, signInDto.password)
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get profile on an authenticated route' })
  @ApiBearerAuth()
  @ApiOkResponse()
  @ApiUnauthorizedResponse({ description: 'Access token is missing or invalid' })
  getProfile(@Request() req) {
    return req.user;
  }
}
