import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RouteArgs {
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
  nextHopIlb?: string;

  // Network IP address of an instance that should handle matching packets.
  nextHopIp?: string;

  /*
The priority of this route. Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.
In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.
Default value is 1000. Valid range is 0 through 65535.
*/
  priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The destination range of outgoing packets that this route applies to.
Only IPv4 is supported.
*/
  destRange?: string;

  /*
The network that this route applies to.


- - -
*/
  network?: string;

  /*
URL to a gateway that should handle matching packets.
Currently, you can only specify the internet gateway, using a full or
partial valid URL:
- `https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway`
- `projects/project/global/gateways/default-internet-gateway`
- `global/gateways/default-internet-gateway`
- The string `default-internet-gateway`.
*/
  nextHopGateway?: string;

  /*
(Optional when `next_hop_instance` is
specified)  The zone of the instance specified in
`next_hop_instance`.  Omit if `next_hop_instance` is specified as
a URL.
*/
  nextHopInstanceZone?: string;

  // URL to a VpnTunnel that should handle matching packets.
  nextHopVpnTunnel?: string;

  // A list of instance tags to which this route applies.
  tags?: Array<string>;

  /*
An optional description of this resource. Provide this property
when you create the resource.
*/
  description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
*/
  name?: string;

  /*
URL to an instance that should handle matching packets.
You can specify this as a full or partial URL. For example:
- `https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance`
- `projects/project/zones/zone/instances/instance`
- `zones/zone/instances/instance`
- Just the instance name, with the zone in `next_hop_instance_zone`.
*/
  nextHopInstance?: string;
}
export class Route extends DS_Resource {
  /*
An optional description of this resource. Provide this property
when you create the resource.
*/
  public description?: string;

  /*
The network that this route applies to.


- - -
*/
  public network?: string;

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
  public nextHopIlb?: string;

  /*
(Optional when `next_hop_instance` is
specified)  The zone of the instance specified in
`next_hop_instance`.  Omit if `next_hop_instance` is specified as
a URL.
*/
  public nextHopInstanceZone?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The destination range of outgoing packets that this route applies to.
Only IPv4 is supported.
*/
  public destRange?: string;

  // Network IP address of an instance that should handle matching packets.
  public nextHopIp?: string;

  // URL to a VpnTunnel that should handle matching packets.
  public nextHopVpnTunnel?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // A list of instance tags to which this route applies.
  public tags?: Array<string>;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.
*/
  public name?: string;

  /*
URL to an instance that should handle matching packets.
You can specify this as a full or partial URL. For example:
- `https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance`
- `projects/project/zones/zone/instances/instance`
- `zones/zone/instances/instance`
- Just the instance name, with the zone in `next_hop_instance_zone`.
*/
  public nextHopInstance?: string;

  /*
The priority of this route. Priority is used to break ties in cases
where there is more than one matching route of equal prefix length.
In the case of two routes with equal prefix length, the one with the
lowest-numbered priority value wins.
Default value is 1000. Valid range is 0 through 65535.
*/
  public priority?: number;

  /*
URL to a gateway that should handle matching packets.
Currently, you can only specify the internet gateway, using a full or
partial valid URL:
- `https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway`
- `projects/project/global/gateways/default-internet-gateway`
- `global/gateways/default-internet-gateway`
- The string `default-internet-gateway`.
*/
  public nextHopGateway?: string;

  // URL to a Network that should handle matching packets.
  public nextHopNetwork?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'nextHopIlb',
        'The IP address or URL to a forwarding rule of type\nloadBalancingScheme=INTERNAL that should handle matching\npackets.\nWith the GA provider you can only specify the forwarding\nrule as a partial or full URL. For example, the following\nare all valid values:\n* 10.128.0.56\n* https://www.googleapis.com/compute/v1/projects/project/regions/region/forwardingRules/forwardingRule\n* regions/region/forwardingRules/forwardingRule\nWhen the beta provider, you can also specify the IP address\nof a forwarding rule from the same VPC or any peered VPC.\nNote that this can only be used when the destinationRange is\na public (non-RFC 1918) IP CIDR range.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'nextHopGateway',
        'URL to a gateway that should handle matching packets.\nCurrently, you can only specify the internet gateway, using a full or\npartial valid URL:\n* `https://www.googleapis.com/compute/v1/projects/project/global/gateways/default-internet-gateway`\n* `projects/project/global/gateways/default-internet-gateway`\n* `global/gateways/default-internet-gateway`\n* The string `default-internet-gateway`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'tags',
        'A list of instance tags to which this route applies.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'destRange',
        'The destination range of outgoing packets that this route applies to.\nOnly IPv4 is supported.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'network',
        'The network that this route applies to.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'nextHopInstanceZone',
        '(Optional when `next_hop_instance` is\nspecified)  The zone of the instance specified in\n`next_hop_instance`.  Omit if `next_hop_instance` is specified as\na URL.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'nextHopVpnTunnel',
        'URL to a VpnTunnel that should handle matching packets.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource. Provide this property\nwhen you create the resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'nextHopIp',
        'Network IP address of an instance that should handle matching packets.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'priority',
        'The priority of this route. Priority is used to break ties in cases\nwhere there is more than one matching route of equal prefix length.\nIn the case of two routes with equal prefix length, the one with the\nlowest-numbered priority value wins.\nDefault value is 1000. Valid range is 0 through 65535.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'nextHopInstance',
        'URL to an instance that should handle matching packets.\nYou can specify this as a full or partial URL. For example:\n* `https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance`\n* `projects/project/zones/zone/instances/instance`\n* `zones/zone/instances/instance`\n* Just the instance name, with the zone in `next_hop_instance_zone`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
