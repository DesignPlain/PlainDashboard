import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_ClusterNetworking {
  /*
(Output)
IP addressing type of this cluster i.e. SINGLESTACK_V4 vs DUALSTACK_V4_V6.
*/
  NetworkType?: string;

  /*
All services in the cluster are assigned an RFC1918 IPv4 address from these
blocks. Only a single block is supported. This field cannot be changed
after creation.
*/
  ServicesIpv4CidrBlocks?: Array<string>;

  /*
If specified, dual stack mode is enabled and all services in the cluster are
assigned an IPv6 address from these blocks alongside from an IPv4
address. Only a single block is supported. This field cannot be changed
after creation.
*/
  ServicesIpv6CidrBlocks?: Array<string>;

  /*
All pods in the cluster are assigned an RFC1918 IPv4 address from these
blocks. Only a single block is supported. This field cannot be changed
after creation.
*/
  ClusterIpv4CidrBlocks?: Array<string>;

  /*
If specified, dual stack mode is enabled and all pods in the cluster are
assigned an IPv6 address from these blocks alongside from an IPv4
address. Only a single block is supported. This field cannot be changed
after creation.
*/
  ClusterIpv6CidrBlocks?: Array<string>;
}

export function Edgecontainer_ClusterNetworking_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ClusterIpv4CidrBlocks",
      "All pods in the cluster are assigned an RFC1918 IPv4 address from these\nblocks. Only a single block is supported. This field cannot be changed\nafter creation.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ClusterIpv6CidrBlocks",
      "If specified, dual stack mode is enabled and all pods in the cluster are\nassigned an IPv6 address from these blocks alongside from an IPv4\naddress. Only a single block is supported. This field cannot be changed\nafter creation.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "NetworkType",
      "(Output)\nIP addressing type of this cluster i.e. SINGLESTACK_V4 vs DUALSTACK_V4_V6.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServicesIpv4CidrBlocks",
      "All services in the cluster are assigned an RFC1918 IPv4 address from these\nblocks. Only a single block is supported. This field cannot be changed\nafter creation.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServicesIpv6CidrBlocks",
      "If specified, dual stack mode is enabled and all services in the cluster are\nassigned an IPv6 address from these blocks alongside from an IPv4\naddress. Only a single block is supported. This field cannot be changed\nafter creation.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
