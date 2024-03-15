import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RouterNatRule } from "../types/RouterNatRule";
import { RouterNatLogConfig } from "../types/RouterNatLogConfig";
import { RouterNatSubnetwork } from "../types/RouterNatSubnetwork";

export interface RouterNatArgs {
  /*
Enable endpoint independent mapping.
For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
*/
  EnableEndpointIndependentMapping?: boolean;

  /*
Configuration for logging on NAT
Structure is documented below.
*/
  LogConfig?: RouterNatLogConfig;

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

  /*
One or more subnetwork NAT configurations. Only used if
`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`
Structure is documented below.
*/
  Subnetworks?: Array<RouterNatSubnetwork>;

  // Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  IcmpIdleTimeoutSec?: number;

  /*
The name of the Cloud Router in which this NAT will be configured.


- - -
*/
  Router?: string;

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
Enable Dynamic Port Allocation.
If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
Mutually exclusive with enableEndpointIndependentMapping.
*/
  EnableDynamicPortAllocation?: boolean;

  // Region where the router and NAT reside.
  Region?: string;

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
Timeout (in seconds) for TCP connections that are in TIME_WAIT state.
Defaults to 120s if not set.
*/
  TcpTimeWaitTimeoutSec?: number;

  /*
Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
*/
  TcpTransitoryIdleTimeoutSec?: number;

  /*
A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
*/
  DrainNatIps?: Array<string>;

  /*
Maximum number of ports allocated to a VM from this NAT.
This field can only be set when enableDynamicPortAllocation is enabled.
*/
  MaxPortsPerVm?: number;

  // Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.
  MinPortsPerVm?: number;

  /*
Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
*/
  Name?: string;

  /*
Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
*/
  NatIps?: Array<string>;

  /*
A list of rules associated with this NAT.
Structure is documented below.
*/
  Rules?: Array<RouterNatRule>;

  /*
Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
*/
  TcpEstablishedIdleTimeoutSec?: number;
}
export class RouterNat extends Resource {
  /*
The name of the Cloud Router in which this NAT will be configured.


- - -
*/
  public Router?: string;

  /*
Timeout (in seconds) for TCP connections that are in TIME_WAIT state.
Defaults to 120s if not set.
*/
  public TcpTimeWaitTimeoutSec?: number;

  /*
Indicates whether this NAT is used for public or private IP translation.
If unspecified, it defaults to PUBLIC.
If `PUBLIC` NAT used for public IP translation.
If `PRIVATE` NAT used for private IP translation.
Default value is `PUBLIC`.
Possible values are: `PUBLIC`, `PRIVATE`.
*/
  public Type?: string;

  // Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  public UdpIdleTimeoutSec?: number;

  /*
Maximum number of ports allocated to a VM from this NAT.
This field can only be set when enableDynamicPortAllocation is enabled.
*/
  public MaxPortsPerVm?: number;

  /*
How external IPs should be allocated for this NAT. Valid values are
`AUTO_ONLY` for only allowing NAT IPs allocated by Google Cloud
Platform, or `MANUAL_ONLY` for only user-allocated NAT IP addresses.
Possible values are: `MANUAL_ONLY`, `AUTO_ONLY`.
*/
  public NatIpAllocateOption?: string;

  // Region where the router and NAT reside.
  public Region?: string;

  /*
Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
*/
  public TcpEstablishedIdleTimeoutSec?: number;

  /*
Enable endpoint independent mapping.
For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
*/
  public EnableEndpointIndependentMapping?: boolean;

  // Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  public IcmpIdleTimeoutSec?: number;

  // Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.
  public MinPortsPerVm?: number;

  /*
Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
*/
  public Name?: string;

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
Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
*/
  public TcpTransitoryIdleTimeoutSec?: number;

  /*
Enable Dynamic Port Allocation.
If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.
Mutually exclusive with enableEndpointIndependentMapping.
*/
  public EnableDynamicPortAllocation?: boolean;

  /*
Configuration for logging on NAT
Structure is documented below.
*/
  public LogConfig?: RouterNatLogConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
A list of rules associated with this NAT.
Structure is documented below.
*/
  public Rules?: Array<RouterNatRule>;

  /*
One or more subnetwork NAT configurations. Only used if
`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`
Structure is documented below.
*/
  public Subnetworks?: Array<RouterNatSubnetwork>;

  /*
A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
*/
  public DrainNatIps?: Array<string>;

  /*
Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
*/
  public NatIps?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "SourceSubnetworkIpRangesToNat",
        "How NAT should be configured per Subnetwork.\nIf `ALL_SUBNETWORKS_ALL_IP_RANGES`, all of the\nIP ranges in every Subnetwork are allowed to Nat.\nIf `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, all of the primary IP\nranges in every Subnetwork are allowed to Nat.\n`LIST_OF_SUBNETWORKS`: A list of Subnetworks are allowed to Nat\n(specified in the field subnetwork below). Note that if this field\ncontains ALL_SUBNETWORKS_ALL_IP_RANGES or\nALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any\nother RouterNat section in any Router for this network in this region.\nPossible values are: `ALL_SUBNETWORKS_ALL_IP_RANGES`, `ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES`, `LIST_OF_SUBNETWORKS`.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "TcpTransitoryIdleTimeoutSec",
        "Timeout (in seconds) for TCP transitory connections.\nDefaults to 30s if not set.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "DrainNatIps",
        "A list of URLs of the IP resources to be drained. These IPs must be\nvalid static external IPs that have been assigned to the NAT.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "TcpEstablishedIdleTimeoutSec",
        "Timeout (in seconds) for TCP established connections.\nDefaults to 1200s if not set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the router and NAT reside.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NatIpAllocateOption",
        "How external IPs should be allocated for this NAT. Valid values are\n`AUTO_ONLY` for only allowing NAT IPs allocated by Google Cloud\nPlatform, or `MANUAL_ONLY` for only user-allocated NAT IP addresses.\nPossible values are: `MANUAL_ONLY`, `AUTO_ONLY`.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "IcmpIdleTimeoutSec",
        "Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Router",
        "The name of the Cloud Router in which this NAT will be configured.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.Number,
        "UdpIdleTimeoutSec",
        "Timeout (in seconds) for UDP connections. Defaults to 30s if not set.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "TcpTimeWaitTimeoutSec",
        "Timeout (in seconds) for TCP connections that are in TIME_WAIT state.\nDefaults to 120s if not set.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxPortsPerVm",
        "Maximum number of ports allocated to a VM from this NAT.\nThis field can only be set when enableDynamicPortAllocation is enabled.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MinPortsPerVm",
        "Minimum number of ports allocated to a VM from this NAT. Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableEndpointIndependentMapping",
        "Enable endpoint independent mapping.\nFor more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).",
      ),
      new DynamicUIProps(
        InputType.String,
        "LogConfig",
        "Configuration for logging on NAT\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NatIps",
        "Self-links of NAT IPs. Only valid if natIpAllocateOption\nis set to MANUAL_ONLY.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableDynamicPortAllocation",
        "Enable Dynamic Port Allocation.\nIf minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.\nIf minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.\nIf maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.\nIf maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.\nMutually exclusive with enableEndpointIndependentMapping.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the NAT service. The name must be 1-63 characters long and\ncomply with RFC1035.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Rules",
        "A list of rules associated with this NAT.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Subnetworks",
        "One or more subnetwork NAT configurations. Only used if\n`source_subnetwork_ip_ranges_to_nat` is set to `LIST_OF_SUBNETWORKS`\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "Indicates whether this NAT is used for public or private IP translation.\nIf unspecified, it defaults to PUBLIC.\nIf `PUBLIC` NAT used for public IP translation.\nIf `PRIVATE` NAT used for private IP translation.\nDefault value is `PUBLIC`.\nPossible values are: `PUBLIC`, `PRIVATE`.",
      ),
    ];
  }
}
