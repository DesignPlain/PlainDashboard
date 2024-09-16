import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface NetworkArgs {
  /*
Maximum Transmission Unit in bytes. The default value is 1460 bytes.
The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
with an ICMP `Fragmentation-Needed` message if the packets are routed to the Internet or other VPCs
with varying MTUs.
*/
  mtu?: number;

  /*
Set the order that Firewall Rules and Firewall Policies are evaluated.
Default value is `AFTER_CLASSIC_FIREWALL`.
Possible values are: `BEFORE_CLASSIC_FIREWALL`, `AFTER_CLASSIC_FIREWALL`.
*/
  networkFirewallPolicyEnforcementOrder?: string;

  /*
When set to `true`, the network is created in "auto subnet mode" and
it will create a subnet for each region automatically across the
`10.128.0.0/9` address range.
When set to `false`, the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources.
*/
  autoCreateSubnetworks?: boolean;

  /*
An optional description of this resource. The resource must be
recreated to modify this field.
*/
  description?: string;

  /*
Enable ULA internal ipv6 on this network. Enabling this feature will assign
a /48 from google defined ULA prefix fd20::/20.
*/
  enableUlaInternalIpv6?: boolean;

  /*
When enabling ula internal ipv6, caller optionally can specify the /48 range
they want from the google defined ULA prefix fd20::/20. The input must be a
valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
fail if the speficied /48 is already in used by another resource.
If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.
*/
  internalIpv6Range?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The network-wide routing mode to use. If set to `REGIONAL`, this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to `GLOBAL`,
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions.
Possible values are: `REGIONAL`, `GLOBAL`.
*/
  routingMode?: string;

  /*
If set to `true`, default routes (`0.0.0.0/0`) will be deleted
immediately after network creation. Defaults to `false`.
*/
  deleteDefaultRoutesOnCreate?: boolean;
}
export class Network extends DS_Resource {
  /*
When enabling ula internal ipv6, caller optionally can specify the /48 range
they want from the google defined ULA prefix fd20::/20. The input must be a
valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
fail if the speficied /48 is already in used by another resource.
If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.
*/
  public internalIpv6Range?: string;

  /*
Maximum Transmission Unit in bytes. The default value is 1460 bytes.
The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
with an ICMP `Fragmentation-Needed` message if the packets are routed to the Internet or other VPCs
with varying MTUs.
*/
  public mtu?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The network-wide routing mode to use. If set to `REGIONAL`, this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to `GLOBAL`,
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions.
Possible values are: `REGIONAL`, `GLOBAL`.
*/
  public routingMode?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // The unique identifier for the resource. This identifier is defined by the server.
  public numericId?: string;

  /*
When set to `true`, the network is created in "auto subnet mode" and
it will create a subnet for each region automatically across the
`10.128.0.0/9` address range.
When set to `false`, the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources.
*/
  public autoCreateSubnetworks?: boolean;

  /*
If set to `true`, default routes (`0.0.0.0/0`) will be deleted
immediately after network creation. Defaults to `false`.
*/
  public deleteDefaultRoutesOnCreate?: boolean;

  /*
An optional description of this resource. The resource must be
recreated to modify this field.
*/
  public description?: string;

  /*
Enable ULA internal ipv6 on this network. Enabling this feature will assign
a /48 from google defined ULA prefix fd20::/20.
*/
  public enableUlaInternalIpv6?: boolean;

  /*
The gateway address for default routing out of the network. This value
is selected by GCP.
*/
  public gatewayIpv4?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


- - -
*/
  public name?: string;

  /*
Set the order that Firewall Rules and Firewall Policies are evaluated.
Default value is `AFTER_CLASSIC_FIREWALL`.
Possible values are: `BEFORE_CLASSIC_FIREWALL`, `AFTER_CLASSIC_FIREWALL`.
*/
  public networkFirewallPolicyEnforcementOrder?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'deleteDefaultRoutesOnCreate',
        'If set to `true`, default routes (`0.0.0.0/0`) will be deleted\nimmediately after network creation. Defaults to `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'mtu',
        'Maximum Transmission Unit in bytes. The default value is 1460 bytes.\nThe minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).\nNote that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped\nwith an ICMP `Fragmentation-Needed` message if the packets are routed to the Internet or other VPCs\nwith varying MTUs.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'networkFirewallPolicyEnforcementOrder',
        'Set the order that Firewall Rules and Firewall Policies are evaluated.\nDefault value is `AFTER_CLASSIC_FIREWALL`.\nPossible values are: `BEFORE_CLASSIC_FIREWALL`, `AFTER_CLASSIC_FIREWALL`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'autoCreateSubnetworks',
        'When set to `true`, the network is created in "auto subnet mode" and\nit will create a subnet for each region automatically across the\n`10.128.0.0/9` address range.\nWhen set to `false`, the network is created in "custom subnet mode" so\nthe user can explicitly connect subnetwork resources.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource. The resource must be\nrecreated to modify this field.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'internalIpv6Range',
        'When enabling ula internal ipv6, caller optionally can specify the /48 range\nthey want from the google defined ULA prefix fd20::/20. The input must be a\nvalid /48 ULA IPv6 address and must be within the fd20::/20. Operation will\nfail if the speficied /48 is already in used by another resource.\nIf the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableUlaInternalIpv6',
        'Enable ULA internal ipv6 on this network. Enabling this feature will assign\na /48 from google defined ULA prefix fd20::/20.',
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
        'routingMode',
        "The network-wide routing mode to use. If set to `REGIONAL`, this\nnetwork's cloud routers will only advertise routes with subnetworks\nof this network in the same region as the router. If set to `GLOBAL`,\nthis network's cloud routers will advertise routes with all\nsubnetworks of this network, across regions.\nPossible values are: `REGIONAL`, `GLOBAL`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
