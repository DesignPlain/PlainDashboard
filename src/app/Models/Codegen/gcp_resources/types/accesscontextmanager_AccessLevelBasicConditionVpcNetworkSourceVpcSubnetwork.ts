import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork {
  // Required. Network name to be allowed by this Access Level. Networks of foreign organizations requires `compute.network.get` permission to be granted to caller.
  network?: string;

  // CIDR block IP subnetwork specification. Must be IPv4.
  vpcIpSubnetworks?: Array<string>;
}

export function accesscontextmanager_AccessLevelBasicConditionVpcNetworkSourceVpcSubnetwork_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "network",
      "Required. Network name to be allowed by this Access Level. Networks of foreign organizations requires `compute.network.get` permission to be granted to caller.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vpcIpSubnetworks",
      "CIDR block IP subnetwork specification. Must be IPv4.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
