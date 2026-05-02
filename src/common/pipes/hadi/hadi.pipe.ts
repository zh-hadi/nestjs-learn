import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class HadiPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if( typeof value === 'string'){
      return "Hadi"
    }
    return value;
  }
}
