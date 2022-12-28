import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredientialsDTO } from './dto/auth-credientials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredientialDTO: AuthCredientialsDTO): Promise<void> {
    return this.authService.signUp(authCredientialDTO);
  }

  @Post('/signin')
  signIn(
    @Body() authCredientialDTO: AuthCredientialsDTO,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredientialDTO);
  }
}
