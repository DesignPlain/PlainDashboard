import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_SubnetworkLogConfig,
  compute_SubnetworkLogConfig_GetTypes,
} from '../types/compute_SubnetworkLogConfig';
import {
  compute_SubnetworkSecondaryIpRange,
  compute_SubnetworkSecondaryIpRange_GetTypes,
} from '../types/compute_SubnetworkSecondaryIpRange';

export interface SubnetworkArgs {
  /*
An optional description of this resource. Provide this property when
you create the resource. This field can be set only at resource
creation time.
*/
  description?: string;

  /*
The name of the resource, provided by the client when initially
creating the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  name?: string;

  /*
The network this subnet belongs to.
Only networks that are in the distributed mode can have subnetworks.


- - -
*/
  network?: string;

  // The GCP region for this subnetwork.
  region?: string;

  /*
The role of subnetwork.
Currently, this field is only used when `purpose` is `REGIONAL_MANAGED_PROXY`.
The value can be set to `ACTIVE` or `BACKUP`.
An `ACTIVE` subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A `BACKUP` subnetwork is one that is ready to be promoted to `ACTIVE` or is currently draining.
Possible values are: `ACTIVE`, `BACKUP`.
*/
  role?: string;

  /*
The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path.
Possible values are: `EXTERNAL`, `INTERNAL`.
*/
  ipv6AccessType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Typically packets destined to IPs within the subnetwork range that do not match
existing resources are dropped and prevented from leaving the VPC.
Setting this field to true will allow these packets to match dynamic routes injected
via BGP even if their destinations match existing subnet ranges.
*/
  allowSubnetCidrRoutesOverlap?: boolean;

  /*
This field denotes the VPC flow logging options for this subnetwork. If
logging is enabled, logs are exported to Cloud Logging. Flow logging
isn't supported if the subnet `purpose` field is set to subnetwork is
`REGIONAL_MANAGED_PROXY` or `GLOBAL_MANAGED_PROXY`.
Structure is documented below.
*/
  logConfig?: compute_SubnetworkLogConfig;

  // The private IPv6 google access type for the VMs in this subnet.
  privateIpv6GoogleAccess?: string;

  /*
The stack type for this subnet to identify whether the IPv6 feature is enabled or not.
If not specified IPV4_ONLY will be used.
Possible values are: `IPV4_ONLY`, `IPV4_IPV6`.
*/
  stackType?: string;

  // The range of external IPv6 addresses that are owned by this subnetwork.
  externalIpv6Prefix?: string;

  /*
The range of internal addresses that are owned by this subnetwork.
Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
*/
  ipCidrRange?: string;

  /*
When enabled, VMs in this subnetwork without external IP addresses can
access Google APIs and services by using Private Google Access.
*/
  privateIpGoogleAccess?: boolean;

  /*
The purpose of the resource. This field can be either `PRIVATE_RFC_1918`, `REGIONAL_MANAGED_PROXY`, `GLOBAL_MANAGED_PROXY`, `PRIVATE_SERVICE_CONNECT` or `PRIVATE_NAT`.
A subnet with purpose set to `REGIONAL_MANAGED_PROXY` is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to `GLOBAL_MANAGED_PROXY` is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to `PRIVATE_SERVICE_CONNECT` reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to `PRIVATE_NAT` is used as source range for Private NAT gateways.
Note that `REGIONAL_MANAGED_PROXY` is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to `PRIVATE_RFC_1918`.
*/
  purpose?: string;

  /*
An array of configurations for secondary IP ranges for VM instances
contained in this subnetwork. The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.
Structure is documented below.
*/
  secondaryIpRanges?: Array<compute_SubnetworkSecondaryIpRange>;
}
export class Subnetwork extends DS_Resource {
  /*
The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path.
Possible values are: `EXTERNAL`, `INTERNAL`.
*/
  public ipv6AccessType?: string;

  // The range of internal IPv6 addresses that are owned by this subnetwork.
  public ipv6CidrRange?: string;

  /*
The name of the resource, provided by the client when initially
creating the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public name?: string;

  // The private IPv6 google access type for the VMs in this subnet.
  public privateIpv6GoogleAccess?: string;

  /*
The gateway address for default routes to reach destination addresses
outside this subnetwork.
*/
  public gatewayAddress?: string;

  /*
The range of internal addresses that are owned by this subnetwork.
Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
*/
  public ipCidrRange?: string;

  /*
An array of configurations for secondary IP ranges for VM instances
contained in this subnetwork. The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.
Structure is documented below.
*/
  public secondaryIpRanges?: Array<compute_SubnetworkSecondaryIpRange>;

  /*
Typically packets destined to IPs within the subnetwork range that do not match
existing resources are dropped and prevented from leaving the VPC.
Setting this field to true will allow these packets to match dynamic routes injected
via BGP even if their destinations match existing subnet ranges.
*/
  public allowSubnetCidrRoutesOverlap?: boolean;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource. This field can be set only at resource
creation time.
*/
  public description?: string;

  // The range of external IPv6 addresses that are owned by this subnetwork.
  public externalIpv6Prefix?: string;

  // The internal IPv6 address range that is assigned to this subnetwork.
  public internalIpv6Prefix?: string;

  /*
The network this subnet belongs to.
Only networks that are in the distributed mode can have subnetworks.


- - -
*/
  public network?: string;

  /*
The role of subnetwork.
Currently, this field is only used when `purpose` is `REGIONAL_MANAGED_PROXY`.
The value can be set to `ACTIVE` or `BACKUP`.
An `ACTIVE` subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A `BACKUP` subnetwork is one that is ready to be promoted to `ACTIVE` or is currently draining.
Possible values are: `ACTIVE`, `BACKUP`.
*/
  public role?: string;

  /*
The stack type for this subnet to identify whether the IPv6 feature is enabled or not.
If not specified IPV4_ONLY will be used.
Possible values are: `IPV4_ONLY`, `IPV4_IPV6`.
*/
  public stackType?: string;

  /*
The purpose of the resource. This field can be either `PRIVATE_RFC_1918`, `REGIONAL_MANAGED_PROXY`, `GLOBAL_MANAGED_PROXY`, `PRIVATE_SERVICE_CONNECT` or `PRIVATE_NAT`.
A subnet with purpose set to `REGIONAL_MANAGED_PROXY` is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to `GLOBAL_MANAGED_PROXY` is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to `PRIVATE_SERVICE_CONNECT` reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to `PRIVATE_NAT` is used as source range for Private NAT gateways.
Note that `REGIONAL_MANAGED_PROXY` is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to `PRIVATE_RFC_1918`.
*/
  public purpose?: string;

  // The GCP region for this subnetwork.
  public region?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // Fingerprint of this resource. This field is used internally during updates of this resource.
  public fingerprint?: string;

  /*
This field denotes the VPC flow logging options for this subnetwork. If
logging is enabled, logs are exported to Cloud Logging. Flow logging
isn't supported if the subnet `purpose` field is set to subnetwork is
`REGIONAL_MANAGED_PROXY` or `GLOBAL_MANAGED_PROXY`.
Structure is documented below.
*/
  public logConfig?: compute_SubnetworkLogConfig;

  /*
When enabled, VMs in this subnetwork without external IP addresses can
access Google APIs and services by using Private Google Access.
*/
  public privateIpGoogleAccess?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'network',
        'The network this subnet belongs to.\nOnly networks that are in the distributed mode can have subnetworks.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logConfig',
        "This field denotes the VPC flow logging options for this subnetwork. If\nlogging is enabled, logs are exported to Cloud Logging. Flow logging\nisn't supported if the subnet `purpose` field is set to subnetwork is\n`REGIONAL_MANAGED_PROXY` or `GLOBAL_MANAGED_PROXY`.\nStructure is documented below.",
        () => compute_SubnetworkLogConfig_GetTypes(),
        false,
        false,
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
        'privateIpv6GoogleAccess',
        'The private IPv6 google access type for the VMs in this subnet.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'secondaryIpRanges',
        'An array of configurations for secondary IP ranges for VM instances\ncontained in this subnetwork. The primary IP of such VM must belong\nto the primary ipCidrRange of the subnetwork. The alias IPs may belong\nto either primary or secondary ranges.\nStructure is documented below.',
        () => compute_SubnetworkSecondaryIpRange_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource. Provide this property when\nyou create the resource. This field can be set only at resource\ncreation time.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The role of subnetwork.\nCurrently, this field is only used when `purpose` is `REGIONAL_MANAGED_PROXY`.\nThe value can be set to `ACTIVE` or `BACKUP`.\nAn `ACTIVE` subnetwork is one that is currently being used for Envoy-based load balancers in a region.\nA `BACKUP` subnetwork is one that is ready to be promoted to `ACTIVE` or is currently draining.\nPossible values are: `ACTIVE`, `BACKUP`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'externalIpv6Prefix',
        'The range of external IPv6 addresses that are owned by this subnetwork.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'purpose',
        'The purpose of the resource. This field can be either `PRIVATE_RFC_1918`, `REGIONAL_MANAGED_PROXY`, `GLOBAL_MANAGED_PROXY`, `PRIVATE_SERVICE_CONNECT` or `PRIVATE_NAT`.\nA subnet with purpose set to `REGIONAL_MANAGED_PROXY` is a user-created subnetwork that is reserved for regional Envoy-based load balancers.\nA subnetwork in a given region with purpose set to `GLOBAL_MANAGED_PROXY` is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.\nA subnetwork with purpose set to `PRIVATE_SERVICE_CONNECT` reserves the subnet for hosting a Private Service Connect published service.\nA subnetwork with purpose set to `PRIVATE_NAT` is used as source range for Private NAT gateways.\nNote that `REGIONAL_MANAGED_PROXY` is the preferred setting for all regional Envoy load balancers.\nIf unspecified, the purpose defaults to `PRIVATE_RFC_1918`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the resource, provided by the client when initially\ncreating the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?` which\nmeans the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The GCP region for this subnetwork.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipv6AccessType',
        "The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation\nor the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet\ncannot enable direct path.\nPossible values are: `EXTERNAL`, `INTERNAL`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'allowSubnetCidrRoutesOverlap',
        'Typically packets destined to IPs within the subnetwork range that do not match\nexisting resources are dropped and prevented from leaving the VPC.\nSetting this field to true will allow these packets to match dynamic routes injected\nvia BGP even if their destinations match existing subnet ranges.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'stackType',
        'The stack type for this subnet to identify whether the IPv6 feature is enabled or not.\nIf not specified IPV4_ONLY will be used.\nPossible values are: `IPV4_ONLY`, `IPV4_IPV6`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipCidrRange',
        'The range of internal addresses that are owned by this subnetwork.\nProvide this property when you create the subnetwork. For example,\n10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and\nnon-overlapping within a network. Only IPv4 is supported.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'privateIpGoogleAccess',
        'When enabled, VMs in this subnetwork without external IP addresses can\naccess Google APIs and services by using Private Google Access.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
