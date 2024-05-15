import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RouterStatusBestRoutesForRouter {
  /*
The IP address or URL to a forwarding rule of type
loadBalancingScheme=INTERNAL that should handle matching
packets.

With the GA provider you can only specify the forwarding
rule as a partial or full URL. For example, the following
are all valid values:
- 10.128.0.56
- https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule
- regions/region/forwardingRules/forwardingRule

When the beta provider, you can also specify the IP address
of a forwarding rule from the same VPC or any peered VPC.

Note that this can only be used when the destinationRange is
a public (non-RFC 1918) IP CIDR range.
*/
  NextHopIlb?: string;

  // The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.
  NextHopInstanceZone?: string;

  // Network IP address of an instance that should handle matching packets.
  NextHopIp?: string;

  //
  SelfLink?: string;

  // A list of instance tags to which this route applies.
  Tags?: Array<string>;

  /*
The network name or resource link to the parent
network of this subnetwork.
*/
  Network?: string;

  /*
URL to an instance that should handle matching packets.
You can specify this as a full or partial URL. For example:
- 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'
- 'projects/project/zones/zone/instances/instance'
- 'zones/zone/instances/instance'
- Just the instance name, with the zone in 'next_hop_instance_zone'.
*/
  NextHopInstance?: string;

  /*
The priority of this route. Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.

In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.

Default value is 1000. Valid range is 0 through 65535.
*/
  Priority?: number;

  /*
The ID of the project in which the resource
belongs. If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
An optional description of this resource. Provide this property
when you create the resource.
*/
  Description?: string;

  /*
The destination range of outgoing packets that this route applies to.
Only IPv4 is supported.
*/
  DestRange?: string;

  /*
URL to a gateway that should handle matching packets.
Currently, you can only specify the internet gateway, using a full or
partial valid URL:
- 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'
- 'projects/project/global/gateways/default-internet-gateway'
- 'global/gateways/default-internet-gateway'
- The string 'default-internet-gateway'.
*/
  NextHopGateway?: string;

  // The name of the router.
  Name?: string;

  // URL to a Network that should handle matching packets.
  NextHopNetwork?: string;

  // URL to a VpnTunnel that should handle matching packets.
  NextHopVpnTunnel?: string;
}

export function Compute_RouterStatusBestRoutesForRouter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "NextHopInstanceZone",
      "The zone of the instance specified in next_hop_instance. Omit if next_hop_instance is specified as a URL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "SelfLink", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "DestRange",
      "The destination range of outgoing packets that this route applies to.\nOnly IPv4 is supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextHopVpnTunnel",
      "URL to a VpnTunnel that should handle matching packets.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextHopIlb",
      "The IP address or URL to a forwarding rule of type\nloadBalancingScheme=INTERNAL that should handle matching\npackets.\n\nWith the GA provider you can only specify the forwarding\nrule as a partial or full URL. For example, the following\nare all valid values:\n* 10.128.0.56\n* https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule\n* regions/region/forwardingRules/forwardingRule\n\nWhen the beta provider, you can also specify the IP address\nof a forwarding rule from the same VPC or any peered VPC.\n\nNote that this can only be used when the destinationRange is\na public (non-RFC 1918) IP CIDR range.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Network",
      "The network name or resource link to the parent\nnetwork of this subnetwork.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The ID of the project in which the resource\nbelongs. If it is not provided, the provider project is used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of this resource. Provide this property\nwhen you create the resource.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the router.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Priority",
      "The priority of this route. Priority is used to break ties in cases\nwhere there is more than one matching route of equal prefix length.\n\nIn the case of two routes with equal prefix length, the one with the\nlowest-numbered priority value wins.\n\nDefault value is 1000. Valid range is 0 through 65535.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextHopGateway",
      "URL to a gateway that should handle matching packets.\nCurrently, you can only specify the internet gateway, using a full or\npartial valid URL:\n* 'https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway'\n* 'projects/project/global/gateways/default-internet-gateway'\n* 'global/gateways/default-internet-gateway'\n* The string 'default-internet-gateway'.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextHopNetwork",
      "URL to a Network that should handle matching packets.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextHopIp",
      "Network IP address of an instance that should handle matching packets.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "A list of instance tags to which this route applies.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "NextHopInstance",
      "URL to an instance that should handle matching packets.\nYou can specify this as a full or partial URL. For example:\n* 'https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance'\n* 'projects/project/zones/zone/instances/instance'\n* 'zones/zone/instances/instance'\n* Just the instance name, with the zone in 'next_hop_instance_zone'.",
      [],
      true,
      false,
    ),
  ];
}
