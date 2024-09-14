import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork,
  accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes,
} from "./accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork";

export interface accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource {
  /*
Sub networks within a VPC network.
Structure is documented below.
*/
  vpcSubnetwork?: accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork;
}

export function accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "vpcSubnetwork",
      "Sub networks within a VPC network.\nStructure is documented below.",
      () =>
        accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes(),
      false,
      false,
    ),
  ];
}
