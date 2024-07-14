import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterGatewayApiConfig {
  // The Gateway API release channel to use for Gateway API.
  channel?: string;
}

export function container_getClusterGatewayApiConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "channel",
      "The Gateway API release channel to use for Gateway API.",
      [],
      true,
      false,
    ),
  ];
}
