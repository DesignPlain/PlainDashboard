import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork,
  accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork_GetTypes,
} from "./accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork";

export interface accesscontextmanager_AccessLevelConditionVpcNetworkSource {
  /*
Sub networks within a VPC network.
Structure is documented below.
*/
  vpcSubnetwork?: accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork;
}

export function accesscontextmanager_AccessLevelConditionVpcNetworkSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "vpcSubnetwork",
      "Sub networks within a VPC network.\nStructure is documented below.",
      () =>
        accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork_GetTypes(),
      false,
      true,
    ),
  ];
}
