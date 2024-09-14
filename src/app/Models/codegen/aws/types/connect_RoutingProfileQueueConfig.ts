import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface connect_RoutingProfileQueueConfig {
  // Specifies the delay, in seconds, that a contact should be in the queue before they are routed to an available agent
  delay?: number;

  // Specifies the order in which contacts are to be handled for the queue.
  priority?: number;

  // ARN for the queue.
  queueArn?: string;

  // Specifies the identifier for the queue.
  queueId?: string;

  // Name for the queue.
  queueName?: string;

  // Specifies the channels agents can handle in the Contact Control Panel (CCP) for this routing profile. Valid values are `VOICE`, `CHAT`, `TASK`.
  channel?: string;
}

export function connect_RoutingProfileQueueConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "delay",
      "Specifies the delay, in seconds, that a contact should be in the queue before they are routed to an available agent",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "priority",
      "Specifies the order in which contacts are to be handled for the queue.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueArn",
      "ARN for the queue.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueId",
      "Specifies the identifier for the queue.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "queueName",
      "Name for the queue.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "channel",
      "Specifies the channels agents can handle in the Contact Control Panel (CCP) for this routing profile. Valid values are `VOICE`, `CHAT`, `TASK`.",
      () => [],
      true,
      false,
    ),
  ];
}
