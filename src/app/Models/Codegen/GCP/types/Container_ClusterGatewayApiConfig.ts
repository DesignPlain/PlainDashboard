import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterGatewayApiConfig {
  // Which Gateway Api channel should be used. `CHANNEL_DISABLED`, `CHANNEL_EXPERIMENTAL` or `CHANNEL_STANDARD`.
  channel?: string;
}

export function container_ClusterGatewayApiConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "channel",
      "Which Gateway Api channel should be used. `CHANNEL_DISABLED`, `CHANNEL_EXPERIMENTAL` or `CHANNEL_STANDARD`.",
      [],
      true,
      false,
    ),
  ];
}
