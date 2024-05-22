import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface connect_RoutingProfileMediaConcurrency {
  // Specifies the number of contacts an agent can have on a channel simultaneously. Valid Range for `VOICE`: Minimum value of 1. Maximum value of 1. Valid Range for `CHAT`: Minimum value of 1. Maximum value of 10. Valid Range for `TASK`: Minimum value of 1. Maximum value of 10.
  concurrency?: number;

  // Specifies the channels that agents can handle in the Contact Control Panel (CCP). Valid values are `VOICE`, `CHAT`, `TASK`.
  channel?: string;
}

export function connect_RoutingProfileMediaConcurrency_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "concurrency",
      "Specifies the number of contacts an agent can have on a channel simultaneously. Valid Range for `VOICE`: Minimum value of 1. Maximum value of 1. Valid Range for `CHAT`: Minimum value of 1. Maximum value of 10. Valid Range for `TASK`: Minimum value of 1. Maximum value of 10.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "channel",
      "Specifies the channels that agents can handle in the Contact Control Panel (CCP). Valid values are `VOICE`, `CHAT`, `TASK`.",
      [],
      true,
      false,
    ),
  ];
}
