import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RouterNatSubnetwork,
  Compute_RouterNatSubnetwork_GetTypes,
} from "../types/Compute_RouterNatSubnetwork";
import {
  Compute_RouterNatLogConfig,
  Compute_RouterNatLogConfig_GetTypes,
} from "../types/Compute_RouterNatLogConfig";
import {
  Compute_RouterNatRule,
  Compute_RouterNatRule_GetTypes,
} from "../types/Compute_RouterNatRule";

export interface RouterNatArgs {
  // Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.
  MinPortsPerVm?: number;

  /*
How external IPs should be allocated for this NAT. Valid values are
`AUTO_ONLY` for only allowing NAT IPs allocated by Google Cloud
Platform, or `MANUAL_ONLY` for only user-allocated NAT IP addresses.
Possible values are: `MANUAL_ONLY`, `AUTO_ONLY`.
*/
  NatIpAllocateOption?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Region where the router and NAT reside.
  Region?: string;

  /*
One or more subnetwork NAT configurations. Only used if
`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`
Structure is documented below.
*/
  Subnetworks?: Array<Compute_RouterNatSubnetwork>;

  /*
Enable endpoint independent mapping.
For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
*/
  EnableEndpointIndependentMapping?: boolean;

  /*
Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
*/
  Name?: string;

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
  SourceSubnetworkIpRangesToNat?: string;

  /*
Indicates whether this NAT is used for public or private IP translation.
If unspecified, it defaults to PUBLIC.
If `PUBLIC` NAT used for public IP translation.
If `PRIVATE` NAT used for private IP translation.
Default value is `PUBLIC`.
Possible values are: `PUBLIC`, `PRIVATE`.
*/
  Type?: string;

  // Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  UdpIdleTimeoutSec?: number;

  /*
A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
*/
  DrainNatIps?: Array<string>;

  // Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  IcmpIdleTimeoutSec?: number;

  /*
Configuration for logging on NAT
Structure is documented below.
*/
  LogConfig?: Compute_RouterNatLogConfig;

  /*
Maximum number of ports allocated to a VM from this NAT.
This field can only be set when enableDynamicPortAllocation is enabled.
*/
  MaxPortsPerVm?: number;

  /*
The name of the Cloud Router in which this NAT will be configured.


- - -
*/
  Router?: string;

  /*
A list of rules associated with this NAT.
Structure is documented below.
*/
  Rules?: Array<Compute_RouterNatRule>;

  /*
Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
*/
  TcpTransitoryIdleTimeoutSec?: number;

  /*
Enable Dynamic Port Allocation.
If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
Mutually exclusive with enableEndpointIndependentMapping.
*/
  EnableDynamicPortAllocation?: boolean;

  /*
Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
*/
  TcpEstablishedIdleTimeoutSec?: number;

  /*
Timeout (in seconds) for TCP connections that are in TIME_WAIT state.
Defaults to 120s if not set.
*/
  TcpTimeWaitTimeoutSec?: number;

  /*
Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
*/
  NatIps?: Array<string>;
}
export class RouterNat extends Resource {
  /*
Indicates whether this NAT is used for public or private IP translation.
If unspecified, it defaults to PUBLIC.
If `PUBLIC` NAT used for public IP translation.
If `PRIVATE` NAT used for private IP translation.
Default value is `PUBLIC`.
Possible values are: `PUBLIC`, `PRIVATE`.
*/
  public Type?: string;

  /*
Enable Dynamic Port Allocation.
If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
Mutually exclusive with enableEndpointIndependentMapping.
*/
  public EnableDynamicPortAllocation?: boolean;

  // Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  public IcmpIdleTimeoutSec?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Timeout (in seconds) for TCP connections that are in TIME_WAIT state.
Defaults to 120s if not set.
*/
  public TcpTimeWaitTimeoutSec?: number;

  /*
Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
*/
  public TcpTransitoryIdleTimeoutSec?: number;

  // Region where the router and NAT reside.
  public Region?: string;

  /*
Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
*/
  public TcpEstablishedIdleTimeoutSec?: number;

  /*
A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
*/
  public DrainNatIps?: Array<string>;

  /*
Enable endpoint independent mapping.
For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
*/
  public EnableEndpointIndependentMapping?: boolean;

  /*
Maximum number of ports allocated to a VM from this NAT.
This field can only be set when enableDynamicPortAllocation is enabled.
*/
  public MaxPortsPerVm?: number;

  // Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.
  public MinPortsPerVm?: number;

  /*
Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
*/
  public Name?: string;

  // Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  public UdpIdleTimeoutSec?: number;

  /*
Configuration for logging on NAT
Structure is documented below.
*/
  public LogConfig?: Compute_RouterNatLogConfig;

  /*
How external IPs should be allocated for this NAT. Valid values are
`AUTO_ONLY` for only allowing NAT IPs allocated by Google Cloud
Platform, or `MANUAL_ONLY` for only user-allocated NAT IP addresses.
Possible values are: `MANUAL_ONLY`, `AUTO_ONLY`.
*/
  public NatIpAllocateOption?: string;

  /*
Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
*/
  public NatIps?: Array<string>;

  /*
The name of the Cloud Router in which this NAT will be configured.


- - -
*/
  public Router?: string;

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
  public SourceSubnetworkIpRangesToNat?: string;

  /*
A list of rules associated with this NAT.
Structure is documented below.
*/
  public Rules?: Array<Compute_RouterNatRule>;

  /*
One or more subnetwork NAT configurations. Only used if
`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`
Structure is documented below.
*/
  public Subnetworks?: Array<Compute_RouterNatSubnetwork>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "NatIpAllocateOption",
        "How external IPs should be allocated for this NAT. Valid values are\n`AUTO_ONLY` for only allowing NAT IPs allocated by Google Cloud\nPlatform, or `MANUAL_ONLY` for only user-allocated NAT IP addresses.\nPossible values are: `MANUAL_ONLY`, `AUTO_ONLY`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SourceSubnetworkIpRangesToNat",
        "How NAT should be configured per Subnetwork.\nIf `ALL_SUBNETWORKS_ALL_IP_RANGES`, all of the\nIP ranges in every Subnetwork are allowed to Nat.\nIf `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, all of the primary IP\nranges in every Subnetwork are allowed to Nat.\n`LIST_OF_SUBNETWORKS`: A list of Subnetworks are allowed to Nat\n(specified in the field subnetwork below). Note that if this field\ncontains ALL_SUBNETWORKS_ALL_IP_RANGES or\nALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any\nother RouterNat section in any Router for this network in this region.\nPossible values are: `ALL_SUBNETWORKS_ALL_IP_RANGES`, `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, `LIST_OF_SUBNETWORKS`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "UdpIdleTimeoutSec",
        "Timeout (in seconds) for UDP connections. Defaults to 30s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DrainNatIps",
        "A list of URLs of the IP resources to be drained. These IPs must be\nvalid static external IPs that have been assigned to the NAT.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxPortsPerVm",
        "Maximum number of ports allocated to a VM from this NAT.\nThis field can only be set when enableDynamicPortAllocation is enabled.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "TcpTransitoryIdleTimeoutSec",
        "Timeout (in seconds) for TCP transitory connections.\nDefaults to 30s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "NatIps",
        "Self-links of NAT IPs. Only valid if natIpAllocateOption\nis set to MANUAL_ONLY.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Indicates whether this NAT is used for public or private IP translation.\nIf unspecified, it defaults to PUBLIC.\nIf `PUBLIC` NAT used for public IP translation.\nIf `PRIVATE` NAT used for private IP translation.\nDefault value is `PUBLIC`.\nPossible values are: `PUBLIC`, `PRIVATE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Rules",
        "A list of rules associated with this NAT.\nStructure is documented below.",
        Compute_RouterNatRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableDynamicPortAllocation",
        "Enable Dynamic Port Allocation.\nIf minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.\nIf minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.\nIf maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.\nIf maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.\nMutually exclusive with enableEndpointIndependentMapping.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "TcpTimeWaitTimeoutSec",
        "Timeout (in seconds) for TCP connections that are in TIME_WAIT state.\nDefaults to 120s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MinPortsPerVm",
        "Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.",
        [],
        false,
        false,
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
        InputType.Bool,
        "EnableEndpointIndependentMapping",
        "Enable endpoint independent mapping.\nFor more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the NAT service. The name must be 1-63 characters long and\ncomply with RFC1035.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "IcmpIdleTimeoutSec",
        "Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LogConfig",
        "Configuration for logging on NAT\nStructure is documented below.",
        Compute_RouterNatLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "TcpEstablishedIdleTimeoutSec",
        "Timeout (in seconds) for TCP established connections.\nDefaults to 1200s if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the router and NAT reside.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Subnetworks",
        "One or more subnetwork NAT configurations. Only used if\n`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`\nStructure is documented below.",
        Compute_RouterNatSubnetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Router",
        "The name of the Cloud Router in which this NAT will be configured.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
