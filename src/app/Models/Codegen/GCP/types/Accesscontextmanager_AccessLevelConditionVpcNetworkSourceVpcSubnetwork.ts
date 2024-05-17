import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork {
  // Required. Network name to be allowed by this Access Level. Networks of foreign organizations requires `compute.network.get` permission to be granted to caller.
  Network?: string;

  // CIDR block IP subnetwork specification. Must be IPv4.
  VpcIpSubnetworks?: Array<string>;
}

export function Accesscontextmanager_AccessLevelConditionVpcNetworkSourceVpcSubnetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Network",
      "Required. Network name to be allowed by this Access Level. Networks of foreign organizations requires `compute.network.get` permission to be granted to caller.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "VpcIpSubnetworks",
      "CIDR block IP subnetwork specification. Must be IPv4.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
