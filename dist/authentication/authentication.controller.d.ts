import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthenticationService } from './authentication.service';
import RequestWithUser from './requestWithUser.interface';
export declare class AuthenticationController {
    private readonly authService;
    constructor(authService: AuthenticationService);
    login(req: RequestWithUser): Promise<{
        access_token: string;
    }>;
    register(createUserDto: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
}
