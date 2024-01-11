import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthenticationService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(registrationData: RegisterDto): Promise<import("../users/entities/user.entity").User>;
    getAuthenticatedUser(email: string, plainTextPassword: string): Promise<import("../users/entities/user.entity").User>;
    private verifyPassword;
    getCookieWithJwtToken(userId: number): Promise<{
        access_token: string;
    }>;
}
