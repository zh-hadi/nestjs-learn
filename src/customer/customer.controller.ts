import { Controller, Get, Headers } from '@nestjs/common';

@Controller('customer')
export class CustomerController {

    @Get()
    getAll(@Headers() headers: any)
    {
        console.log(headers)
        return headers.hadi;
        return "i am working"
    }
}
