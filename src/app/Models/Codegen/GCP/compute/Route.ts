import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RouteArgs {
  /*
The destination range of outgoing packets that this route applies to.
Only IPv4 is supported.
*/
  DestRange?: string;

  /*
The network that this route applies to.


- - -
*/
  Network?: string;

  /*
URL to a gateway that should handle matching packets.
Currently, you can only specify the internet gateway, using a full or
partial valid URL:
- `https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway`
- `projects/project/global/gateways/default-internet-gateway`
- `global/gateways/default-internet-gateway`
- The string `default-internet-gateway`.
*/
  NextHopGateway?: string;

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

  /*
URL to an instance that should handle matching packets.
You can specify this as a full or partial URL. For example:
- `https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance`
- `projects/project/zones/zone/instances/instance`
- `zones/zone/instances/instance`
- Just the instance name, with the zone in `next_hop_instance_zone`.
*/
  NextHopInstance?: string;

  // URL to a VpnTunnel that should handle matching packets.
  NextHopVpnTunnel?: string;

  /*
The priority of this route. Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.
In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.
Default value is 1000. Valid range is 0 through 65535.
*/
  Priority?: number;

  // A list of instance tags to which this route applies.
  Tags?: Array<string>;

  /*
An optional description of this resource. Provide this property
when you create the resource.
*/
  Description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
*/
  Name?: string;

  /*
(Optional when `next_hop_instance` is
specified)  The zone of the instance specified in
`next_hop_instance`.  Omit if `next_hop_instance` is specified as
a URL.
*/
  NextHopInstanceZone?: string;

  // Network IP address of an instance that should handle matching packets.
  NextHopIp?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Route extends Resource {
  /*
The destination range of outgoing packets that this route applies to.
Only IPv4 is supported.
*/
  public DestRange?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
*/
  public Name?: string;

  /*
The network that this route applies to.


- - -
*/
  public Network?: string;

  // Network IP address of an instance that should handle matching packets.
  public NextHopIp?: string;

  // URL to a Network that should handle matching packets.
  public NextHopNetwork?: string;

  /*
The priority of this route. Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.
In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.
Default value is 1000. Valid range is 0 through 65535.
*/
  public Priority?: number;

  // A list of instance tags to which this route applies.
  public Tags?: Array<string>;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
An optional description of this resource. Provide this property
when you create the resource.
*/
  public Description?: string;

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
  public NextHopIlb?: string;

  /*
URL to an instance that should handle matching packets.
You can specify this as a full or partial URL. For example:
- `https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance`
- `projects/project/zones/zone/instances/instance`
- `zones/zone/instances/instance`
- Just the instance name, with the zone in `next_hop_instance_zone`.
*/
  public NextHopInstance?: string;

  /*
(Optional when `next_hop_instance` is
specified)  The zone of the instance specified in
`next_hop_instance`.  Omit if `next_hop_instance` is specified as
a URL.
*/
  public NextHopInstanceZone?: string;

  // URL to a VpnTunnel that should handle matching packets.
  public NextHopVpnTunnel?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
URL to a gateway that should handle matching packets.
Currently, you can only specify the internet gateway, using a full or
partial valid URL:
- `https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway`
- `projects/project/global/gateways/default-internet-gateway`
- `global/gateways/default-internet-gateway`
- The string `default-internet-gateway`.
*/
  public NextHopGateway?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NextHopIp",
        "Network IP address of an instance that should handle matching packets.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property\nwhen you create the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NextHopInstanceZone",
        "(Optional when `next_hop_instance` is\nspecified)  The zone of the instance specified in\n`next_hop_instance`.  Omit if `next_hop_instance` is specified as\na URL.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NextHopGateway",
        "URL to a gateway that should handle matching packets.\nCurrently, you can only specify the internet gateway, using a full or\npartial valid URL:\n* `https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway`\n* `projects/project/global/gateways/default-internet-gateway`\n* `global/gateways/default-internet-gateway`\n* The string `default-internet-gateway`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NextHopIlb",
        "The IP address or URL to a forwarding rule of type\nloadBalancingScheme=INTERNAL that should handle matching\npackets.\nWith the GA provider you can only specify the forwarding\nrule as a partial or full URL. For example, the following\nare all valid values:\n* 10.128.0.56\n* https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule\n* regions/region/forwardingRules/forwardingRule\nWhen the beta provider, you can also specify the IP address\nof a forwarding rule from the same VPC or any peered VPC.\nNote that this can only be used when the destinationRange is\na public (non-RFC 1918) IP CIDR range.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NextHopInstance",
        "URL to an instance that should handle matching packets.\nYou can specify this as a full or partial URL. For example:\n* `https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance`\n* `projects/project/zones/zone/instances/instance`\n* `zones/zone/instances/instance`\n* Just the instance name, with the zone in `next_hop_instance_zone`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NextHopVpnTunnel",
        "URL to a VpnTunnel that should handle matching packets.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "The priority of this route. Priority is used to break ties in cases\nwhere there is more than one matching route of equal prefix length.\nIn the case of two routes with equal prefix length, the one with the\nlowest-numbered priority value wins.\nDefault value is 1000. Valid range is 0 through 65535.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Tags",
        "A list of instance tags to which this route applies.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DestRange",
        "The destination range of outgoing packets that this route applies to.\nOnly IPv4 is supported.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The network that this route applies to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
