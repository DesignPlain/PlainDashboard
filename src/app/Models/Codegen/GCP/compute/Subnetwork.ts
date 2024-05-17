import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_SubnetworkSecondaryIpRange,
  Compute_SubnetworkSecondaryIpRange_GetTypes,
} from "../types/Compute_SubnetworkSecondaryIpRange";
import {
  Compute_SubnetworkLogConfig,
  Compute_SubnetworkLogConfig_GetTypes,
} from "../types/Compute_SubnetworkLogConfig";

export interface SubnetworkArgs {
  // The range of external IPv6 addresses that are owned by this subnetwork.
  ExternalIpv6Prefix?: string;

  /*
The range of internal addresses that are owned by this subnetwork.
Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
*/
  IpCidrRange?: string;

  /*
The name of the resource, provided by the client when initially
creating the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  Name?: string;

  // The private IPv6 google access type for the VMs in this subnet.
  PrivateIpv6GoogleAccess?: string;

  /*
The purpose of the resource. This field can be either `PRIVATE_RFC_1918`, `REGIONAL_MANAGED_PROXY`, `GLOBAL_MANAGED_PROXY`, `PRIVATE_SERVICE_CONNECT` or `PRIVATE_NAT`.
A subnet with purpose set to `REGIONAL_MANAGED_PROXY` is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to `GLOBAL_MANAGED_PROXY` is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to `PRIVATE_SERVICE_CONNECT` reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to `PRIVATE_NAT` is used as source range for Private NAT gateways.
Note that `REGIONAL_MANAGED_PROXY` is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to `PRIVATE_RFC_1918`.
*/
  Purpose?: string;

  /*
The role of subnetwork.
Currently, this field is only used when `purpose` is `REGIONAL_MANAGED_PROXY`.
The value can be set to `ACTIVE` or `BACKUP`.
An `ACTIVE` subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A `BACKUP` subnetwork is one that is ready to be promoted to `ACTIVE` or is currently draining.
Possible values are: `ACTIVE`, `BACKUP`.
*/
  Role?: string;

  /*
An array of configurations for secondary IP ranges for VM instances
contained in this subnetwork. The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.
Structure is documented below.
*/
  SecondaryIpRanges?: Array<Compute_SubnetworkSecondaryIpRange>;

  /*
Typically packets destined to IPs within the subnetwork range that do not match
existing resources are dropped and prevented from leaving the VPC.
Setting this field to true will allow these packets to match dynamic routes injected
via BGP even if their destinations match existing subnet ranges.
*/
  AllowSubnetCidrRoutesOverlap?: boolean;

  /*
When enabled, VMs in this subnetwork without external IP addresses can
access Google APIs and services by using Private Google Access.
*/
  PrivateIpGoogleAccess?: boolean;

  /*
The network this subnet belongs to.
Only networks that are in the distributed mode can have subnetworks.


- - -
*/
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The stack type for this subnet to identify whether the IPv6 feature is enabled or not.
If not specified IPV4_ONLY will be used.
Possible values are: `IPV4_ONLY`, `IPV4_IPV6`.
*/
  StackType?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource. This field can be set only at resource
creation time.
*/
  Description?: string;

  /*
The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path.
Possible values are: `EXTERNAL`, `INTERNAL`.
*/
  Ipv6AccessType?: string;

  /*
This field denotes the VPC flow logging options for this subnetwork. If
logging is enabled, logs are exported to Cloud Logging. Flow logging
isn't supported if the subnet `purpose` field is set to subnetwork is
`REGIONAL_MANAGED_PROXY` or `GLOBAL_MANAGED_PROXY`.
Structure is documented below.
*/
  LogConfig?: Compute_SubnetworkLogConfig;

  // The GCP region for this subnetwork.
  Region?: string;
}
export class Subnetwork extends Resource {
  // Fingerprint of this resource. This field is used internally during updates of this resource.
  public Fingerprint?: string;

  /*
The range of internal addresses that are owned by this subnetwork.
Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
*/
  public IpCidrRange?: string;

  /*
The network this subnet belongs to.
Only networks that are in the distributed mode can have subnetworks.


- - -
*/
  public Network?: string;

  // The GCP region for this subnetwork.
  public Region?: string;

  /*
The stack type for this subnet to identify whether the IPv6 feature is enabled or not.
If not specified IPV4_ONLY will be used.
Possible values are: `IPV4_ONLY`, `IPV4_IPV6`.
*/
  public StackType?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource. This field can be set only at resource
creation time.
*/
  public Description?: string;

  // The range of external IPv6 addresses that are owned by this subnetwork.
  public ExternalIpv6Prefix?: string;

  /*
The role of subnetwork.
Currently, this field is only used when `purpose` is `REGIONAL_MANAGED_PROXY`.
The value can be set to `ACTIVE` or `BACKUP`.
An `ACTIVE` subnetwork is one that is currently being used for Envoy-based load balancers in a region.
A `BACKUP` subnetwork is one that is ready to be promoted to `ACTIVE` or is currently draining.
Possible values are: `ACTIVE`, `BACKUP`.
*/
  public Role?: string;

  // The internal IPv6 address range that is assigned to this subnetwork.
  public InternalIpv6Prefix?: string;

  /*
This field denotes the VPC flow logging options for this subnetwork. If
logging is enabled, logs are exported to Cloud Logging. Flow logging
isn't supported if the subnet `purpose` field is set to subnetwork is
`REGIONAL_MANAGED_PROXY` or `GLOBAL_MANAGED_PROXY`.
Structure is documented below.
*/
  public LogConfig?: Compute_SubnetworkLogConfig;

  // The private IPv6 google access type for the VMs in this subnet.
  public PrivateIpv6GoogleAccess?: string;

  /*
The purpose of the resource. This field can be either `PRIVATE_RFC_1918`, `REGIONAL_MANAGED_PROXY`, `GLOBAL_MANAGED_PROXY`, `PRIVATE_SERVICE_CONNECT` or `PRIVATE_NAT`.
A subnet with purpose set to `REGIONAL_MANAGED_PROXY` is a user-created subnetwork that is reserved for regional Envoy-based load balancers.
A subnetwork in a given region with purpose set to `GLOBAL_MANAGED_PROXY` is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.
A subnetwork with purpose set to `PRIVATE_SERVICE_CONNECT` reserves the subnet for hosting a Private Service Connect published service.
A subnetwork with purpose set to `PRIVATE_NAT` is used as source range for Private NAT gateways.
Note that `REGIONAL_MANAGED_PROXY` is the preferred setting for all regional Envoy load balancers.
If unspecified, the purpose defaults to `PRIVATE_RFC_1918`.
*/
  public Purpose?: string;

  /*
An array of configurations for secondary IP ranges for VM instances
contained in this subnetwork. The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.
Structure is documented below.
*/
  public SecondaryIpRanges?: Array<Compute_SubnetworkSecondaryIpRange>;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
Typically packets destined to IPs within the subnetwork range that do not match
existing resources are dropped and prevented from leaving the VPC.
Setting this field to true will allow these packets to match dynamic routes injected
via BGP even if their destinations match existing subnet ranges.
*/
  public AllowSubnetCidrRoutesOverlap?: boolean;

  /*
When enabled, VMs in this subnetwork without external IP addresses can
access Google APIs and services by using Private Google Access.
*/
  public PrivateIpGoogleAccess?: boolean;

  /*
The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path.
Possible values are: `EXTERNAL`, `INTERNAL`.
*/
  public Ipv6AccessType?: string;

  // The range of internal IPv6 addresses that are owned by this subnetwork.
  public Ipv6CidrRange?: string;

  /*
The name of the resource, provided by the client when initially
creating the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression `a-z?` which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
The gateway address for default routes to reach destination addresses
outside this subnetwork.
*/
  public GatewayAddress?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "StackType",
        "The stack type for this subnet to identify whether the IPv6 feature is enabled or not.\nIf not specified IPV4_ONLY will be used.\nPossible values are: `IPV4_ONLY`, `IPV4_IPV6`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource. This field can be set only at resource\ncreation time.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The GCP region for this subnetwork.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ExternalIpv6Prefix",
        "The range of external IPv6 addresses that are owned by this subnetwork.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "AllowSubnetCidrRoutesOverlap",
        "Typically packets destined to IPs within the subnetwork range that do not match\nexisting resources are dropped and prevented from leaving the VPC.\nSetting this field to true will allow these packets to match dynamic routes injected\nvia BGP even if their destinations match existing subnet ranges.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "IpCidrRange",
        "The range of internal addresses that are owned by this subnetwork.\nProvide this property when you create the subnetwork. For example,\n10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and\nnon-overlapping within a network. Only IPv4 is supported.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LogConfig",
        "This field denotes the VPC flow logging options for this subnetwork. If\nlogging is enabled, logs are exported to Cloud Logging. Flow logging\nisn't supported if the subnet `purpose` field is set to subnetwork is\n`REGIONAL_MANAGED_PROXY` or `GLOBAL_MANAGED_PROXY`.\nStructure is documented below.",
        Compute_SubnetworkLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Ipv6AccessType",
        "The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation\nor the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet\ncannot enable direct path.\nPossible values are: `EXTERNAL`, `INTERNAL`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PrivateIpv6GoogleAccess",
        "The private IPv6 google access type for the VMs in this subnet.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Purpose",
        "The purpose of the resource. This field can be either `PRIVATE_RFC_1918`, `REGIONAL_MANAGED_PROXY`, `GLOBAL_MANAGED_PROXY`, `PRIVATE_SERVICE_CONNECT` or `PRIVATE_NAT`.\nA subnet with purpose set to `REGIONAL_MANAGED_PROXY` is a user-created subnetwork that is reserved for regional Envoy-based load balancers.\nA subnetwork in a given region with purpose set to `GLOBAL_MANAGED_PROXY` is a proxy-only subnet and is shared between all the cross-regional Envoy-based load balancers.\nA subnetwork with purpose set to `PRIVATE_SERVICE_CONNECT` reserves the subnet for hosting a Private Service Connect published service.\nA subnetwork with purpose set to `PRIVATE_NAT` is used as source range for Private NAT gateways.\nNote that `REGIONAL_MANAGED_PROXY` is the preferred setting for all regional Envoy load balancers.\nIf unspecified, the purpose defaults to `PRIVATE_RFC_1918`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role of subnetwork.\nCurrently, this field is only used when `purpose` is `REGIONAL_MANAGED_PROXY`.\nThe value can be set to `ACTIVE` or `BACKUP`.\nAn `ACTIVE` subnetwork is one that is currently being used for Envoy-based load balancers in a region.\nA `BACKUP` subnetwork is one that is ready to be promoted to `ACTIVE` or is currently draining.\nPossible values are: `ACTIVE`, `BACKUP`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "SecondaryIpRanges",
        "An array of configurations for secondary IP ranges for VM instances\ncontained in this subnetwork. The primary IP of such VM must belong\nto the primary ipCidrRange of the subnetwork. The alias IPs may belong\nto either primary or secondary ranges.\nStructure is documented below.",
        Compute_SubnetworkSecondaryIpRange_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "PrivateIpGoogleAccess",
        "When enabled, VMs in this subnetwork without external IP addresses can\naccess Google APIs and services by using Private Google Access.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The network this subnet belongs to.\nOnly networks that are in the distributed mode can have subnetworks.\n\n\n- - -",
        [],
        true,
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
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the resource, provided by the client when initially\ncreating the resource. The name must be 1-63 characters long, and\ncomply with RFC1035. Specifically, the name must be 1-63 characters\nlong and match the regular expression `a-z?` which\nmeans the first character must be a lowercase letter, and all\nfollowing characters must be a dash, lowercase letter, or digit,\nexcept the last character, which cannot be a dash.",
        [],
        false,
        true,
      ),
    ];
  }
}
