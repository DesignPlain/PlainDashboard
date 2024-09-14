import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      false,
      false,
    ),
  ];
}
