import { Controller, Get, Post, Param, Query, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../users/user.entity';
import { UserParams } from './view-models/user-params.model';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@Controller()
//@ApiTags(User.name)
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('users')
    @ApiQuery({ name: 'userId', required: false })
    findAll(@Query() query): Promise<User[]> {
        //if (userId) {
        //    return this.userService.findByUserid(userId);
       // }
        return this.userService.findAll();
    }

    @Get('users/:userId')
    getUserById(@Param('userId') userId) {
        return this.userService.getUserById(userId);
    }

    @Post('users')
    createUser(@Body() params: UserParams): Promise<User> {
        return this.userService.createOne(params);
    }
}
