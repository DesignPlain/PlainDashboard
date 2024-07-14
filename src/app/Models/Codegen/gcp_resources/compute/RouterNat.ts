import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RouterNatSubnetwork,
  compute_RouterNatSubnetwork_GetTypes,
} from "../types/compute_RouterNatSubnetwork";
import {
  compute_RouterNatLogConfig,
  compute_RouterNatLogConfig_GetTypes,
} from "../types/compute_RouterNatLogConfig";
import {
  compute_RouterNatRule,
  compute_RouterNatRule_GetTypes,
} from "../types/compute_RouterNatRule";

export interface RouterNatArgs {
  /*
Enable Dynamic Port Allocation.
If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
Mutually exclusive with enableEndpointIndependentMapping.
*/
  enableDynamicPortAllocation?: boolean;

  // Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  icmpIdleTimeoutSec?: number;

  /*
How NAT should be configured per Subnetwork.
If `ALL_SUBNETWORKS_ALL_IP_RANGES`, all of the
IP ranges in every Subnetwork are allowed to Nat.
If `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, all of the primary IP
ranges in every Subnetwork are allowed to Nat.
`LIST_OF_SUBNETWORKS`: A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region.
Possible values are: `ALL_SUBNETWORKS_ALL_IP_RANGES`, `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, `LIST_OF_SUBNETWORKS`.
*/
  sourceSubnetworkIpRangesToNat?: string;

  /*
Timeout (in seconds) for TCP connections that are in TIME_WAIT state.
Defaults to 120s if not set.
*/
  tcpTimeWaitTimeoutSec?: number;

  // Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  udpIdleTimeoutSec?: number;

  /*
Enable endpoint independent mapping.
For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
*/
  enableEndpointIndependentMapping?: boolean;

  /*
Maximum number of ports allocated to a VM from this NAT.
This field can only be set when enableDynamicPortAllocation is enabled.
*/
  maxPortsPerVm?: number;

  /*
How external IPs should be allocated for this NAT. Valid values are
`AUTO_ONLY` for only allowing NAT IPs allocated by Google Cloud
Platform, or `MANUAL_ONLY` for only user-allocated NAT IP addresses.
Possible values are: `MANUAL_ONLY`, `AUTO_ONLY`.
*/
  natIpAllocateOption?: string;

  /*
Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
*/
  natIps?: Array<string>;

  // Region where the router and NAT reside.
  region?: string;

  /*
Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
*/
  tcpTransitoryIdleTimeoutSec?: number;

  /*
Indicates whether this NAT is used for public or private IP translation.
If unspecified, it defaults to PUBLIC.
If `PUBLIC` NAT used for public IP translation.
If `PRIVATE` NAT used for private IP translation.
Default value is `PUBLIC`.
Possible values are: `PUBLIC`, `PRIVATE`.
*/
  type?: string;

  /*
Configuration for logging on NAT
Structure is documented below.
*/
  logConfig?: compute_RouterNatLogConfig;

  // Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.
  minPortsPerVm?: number;

  /*
The name of the Cloud Router in which this NAT will be configured.


- - -
*/
  router?: string;

  /*
A list of rules associated with this NAT.
Structure is documented below.
*/
  rules?: Array<compute_RouterNatRule>;

  /*
Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
*/
  tcpEstablishedIdleTimeoutSec?: number;

  /*
A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
*/
  drainNatIps?: Array<string>;

  /*
Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
One or more subnetwork NAT configurations. Only used if
`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`
Structure is documented below.
*/
  subnetworks?: Array<compute_RouterNatSubnetwork>;
}
export class RouterNat extends Resource {
  /*
Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
*/
  public tcpTransitoryIdleTimeoutSec?: number;

  /*
Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
*/
  public tcpEstablishedIdleTimeoutSec?: number;

  /*
Timeout (in seconds) for TCP connections that are in TIME_WAIT state.
Defaults to 120s if not set.
*/
  public tcpTimeWaitTimeoutSec?: number;

  /*
How external IPs should be allocated for this NAT. Valid values are
`AUTO_ONLY` for only allowing NAT IPs allocated by Google Cloud
Platform, or `MANUAL_ONLY` for only user-allocated NAT IP addresses.
Possible values are: `MANUAL_ONLY`, `AUTO_ONLY`.
*/
  public natIpAllocateOption?: string;

  /*
Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
*/
  public natIps?: Array<string>;

  /*
One or more subnetwork NAT configurations. Only used if
`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`
Structure is documented below.
*/
  public subnetworks?: Array<compute_RouterNatSubnetwork>;

  /*
Indicates whether this NAT is used for public or private IP translation.
If unspecified, it defaults to PUBLIC.
If `PUBLIC` NAT used for public IP translation.
If `PRIVATE` NAT used for private IP translation.
Default value is `PUBLIC`.
Possible values are: `PUBLIC`, `PRIVATE`.
*/
  public type?: string;

  /*
Enable endpoint independent mapping.
For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
*/
  public enableEndpointIndependentMapping?: boolean;

  /*
Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The name of the Cloud Router in which this NAT will be configured.


- - -
*/
  public router?: string;

  /*
A list of rules associated with this NAT.
Structure is documented below.
*/
  public rules?: Array<compute_RouterNatRule>;

  /*
How NAT should be configured per Subnetwork.
If `ALL_SUBNETWORKS_ALL_IP_RANGES`, all of the
IP ranges in every Subnetwork are allowed to Nat.
If `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, all of the primary IP
ranges in every Subnetwork are allowed to Nat.
`LIST_OF_SUBNETWORKS`: A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region.
Possible values are: `ALL_SUBNETWORKS_ALL_IP_RANGES`, `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, `LIST_OF_SUBNETWORKS`.
*/
  public sourceSubnetworkIpRangesToNat?: string;

  // Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  public icmpIdleTimeoutSec?: number;

  /*
Configuration for logging on NAT
Structure is documented below.
*/
  public logConfig?: compute_RouterNatLogConfig;

  /*
Maximum number of ports allocated to a VM from this NAT.
This field can only be set when enableDynamicPortAllocation is enabled.
*/
  public maxPortsPerVm?: number;

  // Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.
  public minPortsPerVm?: number;

  // Region where the router and NAT reside.
  public region?: string;

  // Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  public udpIdleTimeoutSec?: number;

  /*
A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
*/
  public drainNatIps?: Array<string>;

  /*
Enable Dynamic Port Allocation.
If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
Mutually exclusive with enableEndpointIndependentMapping.
*/
  public enableDynamicPortAllocation?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "logConfig",
        "Configuration for logging on NAT\nStructure is documented below.",
        compute_RouterNatLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "A list of rules associated with this NAT.\nStructure is documented below.",
        compute_RouterNatRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the NAT service. The name must be 1-63 characters long and\ncomply with RFC1035.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxPortsPerVm",
        "Maximum number of ports allocated to a VM from this NAT.\nThis field can only be set when enableDynamicPortAllocation is enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "natIpAllocateOption",
        "How external IPs should be allocated for this NAT. Valid values are\n`AUTO_ONLY` for only allowing NAT IPs allocated by Google Cloud\nPlatform, or `MANUAL_ONLY` for only user-allocated NAT IP addresses.\nPossible values are: `MANUAL_ONLY`, `AUTO_ONLY`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "udpIdleTimeoutSec",
        "Timeout (in seconds) for UDP connections. Defaults to 30s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "minPortsPerVm",
        "Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "tcpEstablishedIdleTimeoutSec",
        "Timeout (in seconds) for TCP established connections.\nDefaults to 1200s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "icmpIdleTimeoutSec",
        "Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "natIps",
        "Self-links of NAT IPs. Only valid if natIpAllocateOption\nis set to MANUAL_ONLY.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "tcpTimeWaitTimeoutSec",
        "Timeout (in seconds) for TCP connections that are in TIME_WAIT state.\nDefaults to 120s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableEndpointIndependentMapping",
        "Enable endpoint independent mapping.\nFor more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "Region where the router and NAT reside.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "tcpTransitoryIdleTimeoutSec",
        "Timeout (in seconds) for TCP transitory connections.\nDefaults to 30s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Indicates whether this NAT is used for public or private IP translation.\nIf unspecified, it defaults to PUBLIC.\nIf `PUBLIC` NAT used for public IP translation.\nIf `PRIVATE` NAT used for private IP translation.\nDefault value is `PUBLIC`.\nPossible values are: `PUBLIC`, `PRIVATE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "router",
        "The name of the Cloud Router in which this NAT will be configured.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableDynamicPortAllocation",
        "Enable Dynamic Port Allocation.\nIf minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.\nIf minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.\nIf maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.\nIf maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.\nMutually exclusive with enableEndpointIndependentMapping.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceSubnetworkIpRangesToNat",
        "How NAT should be configured per Subnetwork.\nIf `ALL_SUBNETWORKS_ALL_IP_RANGES`, all of the\nIP ranges in every Subnetwork are allowed to Nat.\nIf `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, all of the primary IP\nranges in every Subnetwork are allowed to Nat.\n`LIST_OF_SUBNETWORKS`: A list of Subnetworks are allowed to Nat\n(specified in the field subnetwork below). Note that if this field\ncontains ALL_SUBNETWORKS_ALL_IP_RANGES or\nALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any\nother RouterNat section in any Router for this network in this region.\nPossible values are: `ALL_SUBNETWORKS_ALL_IP_RANGES`, `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, `LIST_OF_SUBNETWORKS`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetworks",
        "One or more subnetwork NAT configurations. Only used if\n`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`\nStructure is documented below.",
        compute_RouterNatSubnetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "drainNatIps",
        "A list of URLs of the IP resources to be drained. These IPs must be\nvalid static external IPs that have been assigned to the NAT.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
