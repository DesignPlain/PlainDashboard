import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr {
  // All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
  podAddressCidrBlocks?: Array<string>;

  // All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
  serviceAddressCidrBlocks?: Array<string>;
}

export function gkeonprem_BareMetalAdminClusterNetworkConfigIslandModeCidr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "podAddressCidrBlocks",
      "All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serviceAddressCidrBlocks",
      "All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
