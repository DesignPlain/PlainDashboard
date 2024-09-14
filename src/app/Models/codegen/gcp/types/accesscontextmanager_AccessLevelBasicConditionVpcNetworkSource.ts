import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork,
  accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes,
} from "./accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork";

export interface accesscontextmanager_AccessLevelBasicConditionVpcNetworkSource {
  /*
Sub networks within a VPC network.
Structure is documented below.
*/
  vpcSubnetwork?: accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork;
}

export function accesscontextmanager_AccessLevelBasicConditionVpcNetworkSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "vpcSubnetwork",
      "Sub networks within a VPC network.\nStructure is documented below.",
      () =>
        accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes(),
      false,
      false,
    ),
  ];
}
