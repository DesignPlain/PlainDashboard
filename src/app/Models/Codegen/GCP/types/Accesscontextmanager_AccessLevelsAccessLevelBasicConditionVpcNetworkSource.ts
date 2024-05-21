import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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
      accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes(),
      false,
      false,
    ),
  ];
}
