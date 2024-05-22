import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface edgecontainer_VpnConnectionDetailCloudRouter {
  // The resource name of VPN connection
  name?: string;
}

export function edgecontainer_VpnConnectionDetailCloudRouter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The resource name of VPN connection",
      [],
      false,
      false,
    ),
  ];
}
