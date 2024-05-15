import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork,
  Accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork_GetTypes,
} from "./Accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork";

export interface Accesscontextmanager_AccessLevelConditionVpcNetworkSource {
  /*
Sub networks within a VPC network.
Structure is documented below.
*/
  VpcSubnetwork?: Accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork;
}

export function Accesscontextmanager_AccessLevelConditionVpcNetworkSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "VpcSubnetwork",
      "Sub networks within a VPC network.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork_GetTypes(),
      false,
      true,
    ),
  ];
}
