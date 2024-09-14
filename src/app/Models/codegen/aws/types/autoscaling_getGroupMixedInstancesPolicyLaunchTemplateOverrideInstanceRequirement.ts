import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount";
import {
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount,
  autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount_GetTypes,
} from "./autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount";

export interface autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement {
  // List of objects describing the minimum and maximum baseline EBS bandwidth (Mbps).
  baselineEbsBandwidthMbps?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp>;

  // List of CPU manufacturer names.
  cpuManufacturers?: Array<string>;

  // List of instance generation names.
  instanceGenerations?: Array<string>;

  // Indicates whether instance types with instance store volumes are included, excluded, or required.
  localStorage?: string;

  // List of objects describing the minimum and maximum amount of memory (MiB).
  memoryMibs?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib>;

  // List of objects describing the minimum and maximum amount of network bandwidth (Gbps).
  networkBandwidthGbps?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp>;

  // List of accelerator names.
  acceleratorNames?: Array<string>;

  // Indicates whether bare metal instances are included, excluded, or required.
  bareMetal?: string;

  // List of objects describing the minimum and maximum total storage (GB).
  totalLocalStorageGbs?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb>;

  // List of objects describing the minimum and maximum number of vCPUs.
  vcpuCounts?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount>;

  // List of objects describing the minimum and maximum amount of network interfaces.
  networkInterfaceCounts?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount>;

  // Price protection threshold for On-Demand Instances.
  onDemandMaxPricePercentageOverLowestPrice?: number;

  // Price protection threshold for Spot Instances.
  spotMaxPricePercentageOverLowestPrice?: number;

  // List of excluded instance types.
  excludedInstanceTypes?: Array<string>;

  // Indicates whether instance types must support On-Demand Instance Hibernation.
  requireHibernateSupport?: boolean;

  // Indicates whether burstable performance instance types are included, excluded, or required.
  burstablePerformance?: string;

  // List of local storage type names.
  localStorageTypes?: Array<string>;

  // Price protection threshold for Spot Instances.
  maxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number;

  // List of objects describing the minimum and maximum total memory of the accelerators.
  acceleratorTotalMemoryMibs?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib>;

  // List of accelerator types.
  acceleratorTypes?: Array<string>;

  // List of instance types to apply the specified attributes against.
  allowedInstanceTypes?: Array<string>;

  // List of objects describing the minimum and maximum amount of memory (GiB) per vCPU.
  memoryGibPerVcpus?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus>;

  //
  acceleratorCounts?: Array<autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount>;

  // List of accelerator manufacturer names.
  acceleratorManufacturers?: Array<string>;
}

export function autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "acceleratorManufacturers",
      "List of accelerator manufacturer names.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "baselineEbsBandwidthMbps",
      "List of objects describing the minimum and maximum baseline EBS bandwidth (Mbps).",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementBaselineEbsBandwidthMbp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "localStorage",
      "Indicates whether instance types with instance store volumes are included, excluded, or required.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorTypes",
      "List of accelerator types.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "memoryGibPerVcpus",
      "List of objects describing the minimum and maximum amount of memory (GiB) per vCPU.",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryGibPerVcpus_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vcpuCounts",
      "List of objects describing the minimum and maximum number of vCPUs.",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementVcpuCount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "onDemandMaxPricePercentageOverLowestPrice",
      "Price protection threshold for On-Demand Instances.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireHibernateSupport",
      "Indicates whether instance types must support On-Demand Instance Hibernation.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxSpotPriceAsPercentageOfOptimalOnDemandPrice",
      "Price protection threshold for Spot Instances.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cpuManufacturers",
      "List of CPU manufacturer names.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "memoryMibs",
      "List of objects describing the minimum and maximum amount of memory (MiB).",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementMemoryMib_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkBandwidthGbps",
      "List of objects describing the minimum and maximum amount of network bandwidth (Gbps).",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkBandwidthGbp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "totalLocalStorageGbs",
      "List of objects describing the minimum and maximum total storage (GB).",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementTotalLocalStorageGb_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedInstanceTypes",
      "List of instance types to apply the specified attributes against.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaceCounts",
      "List of objects describing the minimum and maximum amount of network interfaces.",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementNetworkInterfaceCount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "spotMaxPricePercentageOverLowestPrice",
      "Price protection threshold for Spot Instances.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedInstanceTypes",
      "List of excluded instance types.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorTotalMemoryMibs",
      "List of objects describing the minimum and maximum total memory of the accelerators.",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorTotalMemoryMib_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "localStorageTypes",
      "List of local storage type names.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorCounts",
      "",
      () =>
        autoscaling_getGroupMixedInstancesPolicyLaunchTemplateOverrideInstanceRequirementAcceleratorCount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceGenerations",
      "List of instance generation names.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorNames",
      "List of accelerator names.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bareMetal",
      "Indicates whether bare metal instances are included, excluded, or required.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "burstablePerformance",
      "Indicates whether burstable performance instance types are included, excluded, or required.",
      () => [],
      true,
      false,
    ),
  ];
}
