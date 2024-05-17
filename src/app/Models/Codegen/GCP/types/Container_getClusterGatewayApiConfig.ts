import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterGatewayApiConfig {
  // The Gateway API release channel to use for Gateway API.
  Channel?: string;
}

export function Container_getClusterGatewayApiConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Channel",
      "The Gateway API release channel to use for Gateway API.",
      [],
      true,
      false,
    ),
  ];
}
