import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface pinpoint_AppLimits {
  // The maximum number of messages that the campaign can send daily.
  daily?: number;

  // The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60.
  maximumDuration?: number;

  // The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000.
  messagesPerSecond?: number;

  // The maximum total number of messages that the campaign can send.
  total?: number;
}

export function pinpoint_AppLimits_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumDuration",
      "The length of time (in seconds) that the campaign can run before it ends and message deliveries stop. This duration begins at the scheduled start time for the campaign. The minimum value is 60.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "messagesPerSecond",
      "The number of messages that the campaign can send per second. The minimum value is 50, and the maximum is 20000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "total",
      "The maximum total number of messages that the campaign can send.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "daily",
      "The maximum number of messages that the campaign can send daily.",
      [],
      false,
      false,
    ),
  ];
}
