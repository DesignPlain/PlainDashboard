import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork,
  Accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes,
} from "./Accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork";

export interface Accesscontextmanager_AccessLevelBasicConditionVpcNetworkSource {
  /*
Sub networks within a VPC network.
Structure is documented below.
*/
  VpcSubnetwork?: Accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork;
}

export function Accesscontextmanager_AccessLevelBasicConditionVpcNetworkSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "VpcSubnetwork",
      "Sub networks within a VPC network.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes(),
      false,
      false,
    ),
  ];
}
