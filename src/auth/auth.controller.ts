import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredientialsDTO } from './dto/auth-credientials.dto';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController', { timestamp: true });
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredientialDTO: AuthCredientialsDTO): Promise<void> {
    this.logger.verbose(`signup attempt:: ${authCredientialDTO.username}`);
    return this.authService.signUp(authCredientialDTO);
  }

  @Post('/signin')
  signIn(
    @Body() authCredientialDTO: AuthCredientialsDTO,
  ): Promise<{ accessToken: string }> {
    this.logger.verbose(`signin attempt:: ${authCredientialDTO.username}`);
    return this.authService.signIn(authCredientialDTO);
  }
}
