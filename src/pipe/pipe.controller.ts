import { Body, Controller, Get } from '@nestjs/common';
import { HadiPipe } from 'src/common/pipes/hadi/hadi.pipe';

@Controller('pipe')
export class PipeController {

    @Get()
    hadi(@Body( 'name', new HadiPipe()) name: string){
        return name;
    }
}
