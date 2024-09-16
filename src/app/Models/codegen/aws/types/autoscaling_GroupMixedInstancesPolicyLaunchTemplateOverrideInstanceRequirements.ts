import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps';
import {
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb,
  autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb_GetTypes,
} from './autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb';

export interface autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements {
  // Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum.
  acceleratorCount?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount;

  /*
List of accelerator names. Default is any acclerator.

```
Valid names:
- a100            - NVIDIA A100 GPUs
- v100            - NVIDIA V100 GPUs
- k80             - NVIDIA K80 GPUs
- t4              - NVIDIA T4 GPUs
- m60             - NVIDIA M60 GPUs
- radeon-pro-v520 - AMD Radeon Pro V520 GPUs
- vu9p            - Xilinx VU9P FPGAs
```
*/
  acceleratorNames?: Array<string>;

  /*
List of accelerator types. Default is any accelerator type.

```
Valid types:
- fpga
- gpu
- inference
```
*/
  acceleratorTypes?: Array<string>;

  /*
Price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100. Conflicts with `max_spot_price_as_percentage_of_optimal_on_demand_price`

If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.
*/
  spotMaxPricePercentageOverLowestPrice?: number;

  // Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum.
  acceleratorTotalMemoryMib?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib;

  // Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum.
  baselineEbsBandwidthMbps?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps;

  // Indicate whether burstable performance instance types should be `included`, `excluded`, or `required`. Default is `excluded`.
  burstablePerformance?: string;

  // The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Conflicts with `spot_max_price_percentage_over_lowest_price`
  maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;

  // Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum.
  memoryGibPerVcpu?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu;

  // Block describing the minimum and maximum amount of memory (MiB). Default is no maximum.
  memoryMib?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib;

  /*
Price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20.

If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.
*/
  onDemandMaxPricePercentageOverLowestPrice?: number;

  // Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`.
  bareMetal?: string;

  /*
List of CPU manufacturer names. Default is any manufacturer.

> --NOTE:-- Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.

```
Valid names:
- amazon-web-services
- amd
- intel
```
*/
  cpuManufacturers?: Array<string>;

  /*
List of instance generation names. Default is any generation.

```
Valid names:
- current  - Recommended for best performance.
- previous - For existing applications optimized for older instance types.
```
*/
  instanceGenerations?: Array<string>;

  /*
List of local storage type names. Default any storage type.

```
Value names:
- hdd - hard disk drive
- ssd - solid state drive
```
*/
  localStorageTypes?: Array<string>;

  // Block describing the minimum and maximum total local storage (GB). Default is no minimum or maximum.
  totalLocalStorageGb?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb;

  // Block describing the minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is no minimum or maximum.
  networkBandwidthGbps?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps;

  // Block describing the minimum and maximum number of network interfaces. Default is no minimum or maximum.
  networkInterfaceCount?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount;

  // Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`.
  requireHibernateSupport?: boolean;

  // Block describing the minimum and maximum number of vCPUs. Default is no maximum.
  vcpuCount?: autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount;

  /*
List of accelerator manufacturer names. Default is any manufacturer.

```
Valid names:
- amazon-web-services
- amd
- nvidia
- xilinx
```
*/
  acceleratorManufacturers?: Array<string>;

  /*
List of instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards, represented by an asterisk (\-), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5-.-`, `m5a.-`, `r-`, `-3-`. For example, if you specify `c5-`, you are allowing the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.-`, you are allowing all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is all instance types.

> --NOTE:-- If you specify `allowed_instance_types`, you can't specify `excluded_instance_types`.
*/
  allowedInstanceTypes?: Array<string>;

  /*
List of instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\-), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5-.-`, `m5a.-`, `r-`, `-3-`. For example, if you specify `c5-`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.-`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types.

> --NOTE:-- If you specify `excluded_instance_types`, you can't specify `allowed_instance_types`.
*/
  excludedInstanceTypes?: Array<string>;

  // Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`.
  localStorage?: string;
}

export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirements_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'allowedInstanceTypes',
      "List of instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards, represented by an asterisk (\\*), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are allowing the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are allowing all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is all instance types.\n\n> **NOTE:** If you specify `allowed_instance_types`, you can't specify `excluded_instance_types`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'acceleratorTypes',
      'List of accelerator types. Default is any accelerator type.\n\n```\nValid types:\n* fpga\n* gpu\n* inference\n```',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'cpuManufacturers',
      "List of CPU manufacturer names. Default is any manufacturer.\n\n> **NOTE:** Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.\n\n```\nValid names:\n* amazon-web-services\n* amd\n* intel\n```",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'localStorageTypes',
      'List of local storage type names. Default any storage type.\n\n```\nValue names:\n* hdd - hard disk drive\n* ssd - solid state drive\n```',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'acceleratorManufacturers',
      'List of accelerator manufacturer names. Default is any manufacturer.\n\n```\nValid names:\n* amazon-web-services\n* amd\n* nvidia\n* xilinx\n```',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'acceleratorCount',
      'Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'onDemandMaxPricePercentageOverLowestPrice',
      'Price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20.\n\nIf you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'totalLocalStorageGb',
      'Block describing the minimum and maximum total local storage (GB). Default is no minimum or maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsTotalLocalStorageGb_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'instanceGenerations',
      'List of instance generation names. Default is any generation.\n\n```\nValid names:\n* current  - Recommended for best performance.\n* previous - For existing applications optimized for older instance types.\n```',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'networkBandwidthGbps',
      'Block describing the minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is no minimum or maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkBandwidthGbps_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'networkInterfaceCount',
      'Block describing the minimum and maximum number of network interfaces. Default is no minimum or maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsNetworkInterfaceCount_GetTypes(),
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
      InputType.Array,
      'acceleratorNames',
      'List of accelerator names. Default is any acclerator.\n\n```\nValid names:\n* a100            - NVIDIA A100 GPUs\n* v100            - NVIDIA V100 GPUs\n* k80             - NVIDIA K80 GPUs\n* t4              - NVIDIA T4 GPUs\n* m60             - NVIDIA M60 GPUs\n* radeon-pro-v520 - AMD Radeon Pro V520 GPUs\n* vu9p            - Xilinx VU9P FPGAs\n```',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'acceleratorTotalMemoryMib',
      'Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsAcceleratorTotalMemoryMib_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'baselineEbsBandwidthMbps',
      'Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes(),
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
      'vcpuCount',
      'Block describing the minimum and maximum number of vCPUs. Default is no maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsVcpuCount_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'excludedInstanceTypes',
      "List of instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\\*), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types.\n\n> **NOTE:** If you specify `excluded_instance_types`, you can't specify `allowed_instance_types`.",
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
      InputType.String,
      'bareMetal',
      'Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'spotMaxPricePercentageOverLowestPrice',
      'Price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100. Conflicts with `max_spot_price_as_percentage_of_optimal_on_demand_price`\n\nIf you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'burstablePerformance',
      'Indicate whether burstable performance instance types should be `included`, `excluded`, or `required`. Default is `excluded`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'memoryGibPerVcpu',
      'Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryGibPerVcpu_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'memoryMib',
      'Block describing the minimum and maximum amount of memory (MiB). Default is no maximum.',
      () =>
        autoscaling_GroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementsMemoryMib_GetTypes(),
      false,
      false,
    ),
  ];
}
