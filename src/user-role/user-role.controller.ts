import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guard/roles/roles.decorator';
import { RolesGuard } from 'src/guard/roles/roles.guard';
import { Role } from 'src/guard/roles/roles.enum';
import { Hadi } from 'src/guard/roles/hadi.decorator';

@Controller('user-role')
export class UserRoleController {

    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData() {
        return  {message: 'only admin can access'}
    }
}
