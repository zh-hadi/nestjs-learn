import { Controller, Get } from '@nestjs/common';
import { EvService } from 'src/ev/ev.service';

@Controller('ev-controller')
export class EvControllerController {

    constructor(private readonly evService: EvService){}

    @Get()
    evWorking(){
        return this.evService.getDbUrl();
        return "ev working"
    }
}
