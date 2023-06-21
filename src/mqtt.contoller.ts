import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';

@Controller('math')
export class MqttController {
  //testing processed_messages
  @MessagePattern('processed_temperature_channel')
  getNews(@Payload() data: number, @Ctx() context: MqttContext): string {
    console.log('received');
    console.log(data);
    return `Received : ${data} from topic ${context.getTopic()}`;
  }
}
