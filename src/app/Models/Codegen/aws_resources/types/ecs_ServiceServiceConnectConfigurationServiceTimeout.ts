import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_ServiceServiceConnectConfigurationServiceTimeout {
  // The amount of time in seconds a connection will stay active while idle. A value of 0 can be set to disable idleTimeout.
  idleTimeoutSeconds?: number;

  // The amount of time in seconds for the upstream to respond with a complete response per request. A value of 0 can be set to disable perRequestTimeout. Can only be set when appProtocol isn't TCP.
  perRequestTimeoutSeconds?: number;
}

export function ecs_ServiceServiceConnectConfigurationServiceTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "idleTimeoutSeconds",
      "The amount of time in seconds a connection will stay active while idle. A value of 0 can be set to disable idleTimeout.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "perRequestTimeoutSeconds",
      "The amount of time in seconds for the upstream to respond with a complete response per request. A value of 0 can be set to disable perRequestTimeout. Can only be set when appProtocol isn't TCP.",
      [],
      false,
      false,
    ),
  ];
}
