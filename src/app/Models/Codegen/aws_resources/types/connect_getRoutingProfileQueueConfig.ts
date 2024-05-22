import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface connect_getRoutingProfileQueueConfig {
  // Order in which contacts are to be handled for the queue.
  priority?: number;

  // ARN for the queue.
  queueArn?: string;

  // Identifier for the queue.
  queueId?: string;

  // Name for the queue.
  queueName?: string;

  // Channels agents can handle in the Contact Control Panel (CCP) for this routing profile. Valid values are `VOICE`, `CHAT`, `TASK`.
  channel?: string;

  // Delay, in seconds, that a contact should be in the queue before they are routed to an available agent
  delay?: number;
}

export function connect_getRoutingProfileQueueConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "queueArn",
      "ARN for the queue.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueId",
      "Identifier for the queue.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueName",
      "Name for the queue.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "channel",
      "Channels agents can handle in the Contact Control Panel (CCP) for this routing profile. Valid values are `VOICE`, `CHAT`, `TASK`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "delay",
      "Delay, in seconds, that a contact should be in the queue before they are routed to an available agent",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Order in which contacts are to be handled for the queue.",
      [],
      true,
      false,
    ),
  ];
}
