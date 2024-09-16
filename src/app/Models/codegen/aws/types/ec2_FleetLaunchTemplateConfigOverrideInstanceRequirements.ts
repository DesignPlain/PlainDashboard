import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount';
import {
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps,
  ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes,
} from './ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps';

export interface ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements {
  // Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`.
  requireHibernateSupport?: boolean;

  /*
The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100. Conflicts with `max_spot_price_as_percentage_of_optimal_on_demand_price`

If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.
*/
  spotMaxPricePercentageOverLowestPrice?: number;

  // Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum.
  memoryGibPerVcpu?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu;

  /*
The CPU manufacturers to include. Default is any manufacturer.
> --NOTE:-- Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.
*/
  cpuManufacturers?: Array<string>;

  /*
The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20.

If you set `target_capacity_unit_type` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
*/
  onDemandMaxPricePercentageOverLowestPrice?: number;

  // List of accelerator names. Default is any acclerator.
  acceleratorNames?: Array<string>;

  // List of accelerator manufacturer names. Default is any manufacturer.
  acceleratorManufacturers?: Array<string>;

  // Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum.
  acceleratorTotalMemoryMib?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib;

  // Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`.
  bareMetal?: string;

  // Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`.
  localStorage?: string;

  // The minimum and maximum amount of memory per vCPU, in GiB. Default is no minimum or maximum limits.
  memoryMib?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib;

  // Block describing the minimum and maximum number of network interfaces. Default is no minimum or maximum.
  networkInterfaceCount?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount;

  // Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum limits.
  acceleratorCount?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount;

  /*
The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards,represented by an asterisk (\-). The following are examples: `c5-`, `m5a.-`, `r-`, `-3-`. For example, if you specify `c5-`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.-`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types. Default is any instance type.

If you specify `AllowedInstanceTypes`, you can't specify `ExcludedInstanceTypes`.
*/
  allowedInstanceTypes?: Array<string>;

  // Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum.
  baselineEbsBandwidthMbps?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps;

  // Indicates whether burstable performance T instance types are `included`, `excluded`, or `required`. Default is `excluded`.
  burstablePerformance?: string;

  /*
The instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\-). The following are examples: `c5-`, `m5a.-`, `r-`, `-3-`. For example, if you specify `c5-`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.-`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types.

If you specify `AllowedInstanceTypes`, you can't specify `ExcludedInstanceTypes`.
*/
  excludedInstanceTypes?: Array<string>;

  // Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Valid values are `current` and `previous`. Default is `current` and `previous` generation instance types.
  instanceGenerations?: Array<string>;

  // List of local storage type names. Valid values are `hdd` and `ssd`. Default any storage type.
  localStorageTypes?: Array<string>;

  // The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Conflicts with `spot_max_price_percentage_over_lowest_price`
  maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;

  // The accelerator types that must be on the instance type. Default is any accelerator type.
  acceleratorTypes?: Array<string>;

  // Block describing the minimum and maximum total local storage (GB). Default is no minimum or maximum.
  totalLocalStorageGb?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb;

  // Block describing the minimum and maximum number of vCPUs. Default is no maximum.
  vcpuCount?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount;

  // The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is No minimum or maximum.
  networkBandwidthGbps?: ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps;
}

export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirements_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'acceleratorManufacturers',
      'List of accelerator manufacturer names. Default is any manufacturer.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'acceleratorTotalMemoryMib',
      'Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'memoryMib',
      'The minimum and maximum amount of memory per vCPU, in GiB. Default is no minimum or maximum limits.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'acceleratorTypes',
      'The accelerator types that must be on the instance type. Default is any accelerator type.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'acceleratorNames',
      'List of accelerator names. Default is any acclerator.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'spotMaxPricePercentageOverLowestPrice',
      'The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100. Conflicts with `max_spot_price_as_percentage_of_optimal_on_demand_price`\n\nIf you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'acceleratorCount',
      'Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum limits.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'baselineEbsBandwidthMbps',
      'Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'networkBandwidthGbps',
      'The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is No minimum or maximum.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'requireHibernateSupport',
      'Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bareMetal',
      'Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'networkInterfaceCount',
      'Block describing the minimum and maximum number of network interfaces. Default is no minimum or maximum.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'burstablePerformance',
      'Indicates whether burstable performance T instance types are `included`, `excluded`, or `required`. Default is `excluded`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'excludedInstanceTypes',
      "The instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\\*). The following are examples: `c5*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types.\n\nIf you specify `AllowedInstanceTypes`, you can't specify `ExcludedInstanceTypes`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'localStorageTypes',
      'List of local storage type names. Valid values are `hdd` and `ssd`. Default any storage type.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'totalLocalStorageGb',
      'Block describing the minimum and maximum total local storage (GB). Default is no minimum or maximum.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'vcpuCount',
      'Block describing the minimum and maximum number of vCPUs. Default is no maximum.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'onDemandMaxPricePercentageOverLowestPrice',
      'The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20.\n\nIf you set `target_capacity_unit_type` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'cpuManufacturers',
      "The CPU manufacturers to include. Default is any manufacturer.\n> **NOTE:** Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'localStorage',
      'Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowedInstanceTypes',
      "The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards,represented by an asterisk (\\*). The following are examples: `c5*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types. Default is any instance type.\n\nIf you specify `AllowedInstanceTypes`, you can't specify `ExcludedInstanceTypes`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'instanceGenerations',
      'Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Valid values are `current` and `previous`. Default is `current` and `previous` generation instance types.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxSpotPriceAsPercentageOfOptimalOnDemandPrice',
      'The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Conflicts with `spot_max_price_percentage_over_lowest_price`',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'memoryGibPerVcpu',
      'Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum.',
      () =>
        ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu_GetTypes(),
      false,
      false,
    ),
  ];
}
