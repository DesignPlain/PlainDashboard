import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mq_BrokerInstance {
  // The URL of the [ActiveMQ Web Console](http://activemq.apache.org/web-console.html) or the [RabbitMQ Management UI](https://www.rabbitmq.com/management.html#external-monitoring) depending on `engine_type`.
  consoleUrl?: string;

  /*
Broker's wire-level protocol endpoints in the following order & format referenceable e.g., as `instances.0.endpoints.0` (SSL):
- For `ActiveMQ`:
- `ssl://broker-id.mq.us-west-2.amazonaws.com:61617`
- `amqp+ssl://broker-id.mq.us-west-2.amazonaws.com:5671`
- `stomp+ssl://broker-id.mq.us-west-2.amazonaws.com:61614`
- `mqtt+ssl://broker-id.mq.us-west-2.amazonaws.com:8883`
- `wss://broker-id.mq.us-west-2.amazonaws.com:61619`
- For `RabbitMQ`:
- `amqps://broker-id.mq.us-west-2.amazonaws.com:5671`
*/
  endpoints?: Array<string>;

  // IP Address of the broker.
  ipAddress?: string;
}

export function mq_BrokerInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "consoleUrl",
      "The URL of the [ActiveMQ Web Console](http://activemq.apache.org/web-console.html) or the [RabbitMQ Management UI](https://www.rabbitmq.com/management.html#external-monitoring) depending on `engine_type`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "endpoints",
      "Broker's wire-level protocol endpoints in the following order & format referenceable e.g., as `instances.0.endpoints.0` (SSL):\n* For `ActiveMQ`:\n* `ssl://broker-id.mq.us-west-2.amazonaws.com:61617`\n* `amqp+ssl://broker-id.mq.us-west-2.amazonaws.com:5671`\n* `stomp+ssl://broker-id.mq.us-west-2.amazonaws.com:61614`\n* `mqtt+ssl://broker-id.mq.us-west-2.amazonaws.com:8883`\n* `wss://broker-id.mq.us-west-2.amazonaws.com:61619`\n* For `RabbitMQ`:\n* `amqps://broker-id.mq.us-west-2.amazonaws.com:5671`",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddress",
      "IP Address of the broker.",
      () => [],
      false,
      false,
    ),
  ];
}
