import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork,
  Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes,
} from "./Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork";

export interface Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource {
  /*
Sub networks within a VPC network.
Structure is documented below.
*/
  VpcSubnetwork?: Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork;
}

export function Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "VpcSubnetwork",
      "Sub networks within a VPC network.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelsAccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes(),
      false,
      false,
    ),
  ];
}
