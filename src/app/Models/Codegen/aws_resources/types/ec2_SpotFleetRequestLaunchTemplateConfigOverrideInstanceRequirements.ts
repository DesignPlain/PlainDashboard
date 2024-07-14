import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib";
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount";
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib";
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount";
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu";
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps";
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps";
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount";
import {
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb,
  ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb_GetTypes,
} from "./ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb";

export interface ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements {
  // Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`.
  bareMetal?: string;

  // Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum.
  baselineEbsBandwidthMbps?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps;

  /*
List of CPU manufacturer names. Default is any manufacturer.

> --NOTE:-- Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.
*/
  cpuManufacturers?: Array<string>;

  // Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`.
  localStorage?: string;

  /*
The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20.

If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.
*/
  onDemandMaxPricePercentageOverLowestPrice?: number;

  // Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`.
  requireHibernateSupport?: boolean;

  // Indicate whether burstable performance instance types should be `included`, `excluded`, or `required`. Default is `excluded`.
  burstablePerformance?: string;

  // Block describing the minimum and maximum amount of memory (MiB). Default is no maximum.
  memoryMib?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib;

  // Block describing the minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is no minimum or maximum.
  networkBandwidthGbps?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps;

  // Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum.
  acceleratorCount?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount;

  // Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum.
  acceleratorTotalMemoryMib?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib;

  // List of accelerator types. Default is any accelerator type.
  acceleratorTypes?: Array<string>;

  /*
List of instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\-), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5-.-`, `m5a.-`, `r-`, `-3-`. For example, if you specify `c5-`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.-`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types.

> --NOTE:-- If you specify `excluded_instance_types`, you can't specify `allowed_instance_types`.
*/
  excludedInstanceTypes?: Array<string>;

  // List of instance generation names. Default is any generation.
  instanceGenerations?: Array<string>;

  // List of local storage type names. Default any storage type.
  localStorageTypes?: Array<string>;

  // Block describing the minimum and maximum number of vCPUs. Default is no maximum.
  vcpuCount?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount;

  // List of accelerator manufacturer names. Default is any manufacturer.
  acceleratorManufacturers?: Array<string>;

  // List of accelerator names. Default is any acclerator.
  acceleratorNames?: Array<string>;

  /*
List of instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards, represented by an asterisk (\-), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5-.-`, `m5a.-`, `r-`, `-3-`. For example, if you specify `c5-`, you are allowing the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.-`, you are allowing all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is all instance types.

> --NOTE:-- If you specify `allowed_instance_types`, you can't specify `excluded_instance_types`.
*/
  allowedInstanceTypes?: Array<string>;

  // Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum.
  memoryGibPerVcpu?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu;

  // Block describing the minimum and maximum number of network interfaces. Default is no minimum or maximum.
  networkInterfaceCount?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount;

  /*
The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100.

If you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.
*/
  spotMaxPricePercentageOverLowestPrice?: number;

  // Block describing the minimum and maximum total local storage (GB). Default is no minimum or maximum.
  totalLocalStorageGb?: ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb;
}

export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirements_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "onDemandMaxPricePercentageOverLowestPrice",
      "The price protection threshold for On-Demand Instances. This is the maximum you’ll pay for an On-Demand Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 20.\n\nIf you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorTypes",
      "List of accelerator types. Default is any accelerator type.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "localStorageTypes",
      "List of local storage type names. Default any storage type.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "memoryGibPerVcpu",
      "Block describing the minimum and maximum amount of memory (GiB) per vCPU. Default is no minimum or maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryGibPerVcpu_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorNames",
      "List of accelerator names. Default is any acclerator.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "bareMetal",
      "Indicate whether bare metal instace types should be `included`, `excluded`, or `required`. Default is `excluded`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cpuManufacturers",
      "List of CPU manufacturer names. Default is any manufacturer.\n\n> **NOTE:** Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireHibernateSupport",
      "Indicate whether instance types must support On-Demand Instance Hibernation, either `true` or `false`. Default is `false`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "burstablePerformance",
      "Indicate whether burstable performance instance types should be `included`, `excluded`, or `required`. Default is `excluded`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vcpuCount",
      "Block describing the minimum and maximum number of vCPUs. Default is no maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsVcpuCount_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorManufacturers",
      "List of accelerator manufacturer names. Default is any manufacturer.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "memoryMib",
      "Block describing the minimum and maximum amount of memory (MiB). Default is no maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsMemoryMib_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "acceleratorTotalMemoryMib",
      "Block describing the minimum and maximum total memory of the accelerators. Default is no minimum or maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorTotalMemoryMib_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedInstanceTypes",
      "List of instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes. You can use strings with one or more wild cards, represented by an asterisk (\\*), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are allowing the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are allowing all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is all instance types.\n\n> **NOTE:** If you specify `allowed_instance_types`, you can't specify `excluded_instance_types`.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkInterfaceCount",
      "Block describing the minimum and maximum number of network interfaces. Default is no minimum or maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkInterfaceCount_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "spotMaxPricePercentageOverLowestPrice",
      "The price protection threshold for Spot Instances. This is the maximum you’ll pay for a Spot Instance, expressed as a percentage higher than the cheapest M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value, such as 999999. Default is 100.\n\nIf you set DesiredCapacityType to vcpu or memory-mib, the price protection threshold is applied based on the per vCPU or per memory price instead of the per instance price.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "totalLocalStorageGb",
      "Block describing the minimum and maximum total local storage (GB). Default is no minimum or maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsTotalLocalStorageGb_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "baselineEbsBandwidthMbps",
      "Block describing the minimum and maximum baseline EBS bandwidth, in Mbps. Default is no minimum or maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "localStorage",
      "Indicate whether instance types with local storage volumes are `included`, `excluded`, or `required`. Default is `included`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "networkBandwidthGbps",
      "Block describing the minimum and maximum amount of network bandwidth, in gigabits per second (Gbps). Default is no minimum or maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "acceleratorCount",
      "Block describing the minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips). Default is no minimum or maximum.",
      ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsAcceleratorCount_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedInstanceTypes",
      "List of instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (\\*), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`. For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, you are excluding all the M5a instance types, but not the M5n instance types. Maximum of 400 entries in the list; each entry is limited to 30 characters. Default is no excluded instance types.\n\n> **NOTE:** If you specify `excluded_instance_types`, you can't specify `allowed_instance_types`.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceGenerations",
      "List of instance generation names. Default is any generation.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
