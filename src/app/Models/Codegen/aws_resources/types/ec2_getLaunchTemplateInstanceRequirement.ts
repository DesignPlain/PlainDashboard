import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp,
  ec2_getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp";
import {
  ec2_getLaunchTemplateInstanceRequirementMemoryMib,
  ec2_getLaunchTemplateInstanceRequirementMemoryMib_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementMemoryMib";
import {
  ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount,
  ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount";
import {
  ec2_getLaunchTemplateInstanceRequirementTotalLocalStorageGb,
  ec2_getLaunchTemplateInstanceRequirementTotalLocalStorageGb_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementTotalLocalStorageGb";
import {
  ec2_getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib,
  ec2_getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib";
import {
  ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus,
  ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus";
import {
  ec2_getLaunchTemplateInstanceRequirementVcpuCount,
  ec2_getLaunchTemplateInstanceRequirementVcpuCount_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementVcpuCount";
import {
  ec2_getLaunchTemplateInstanceRequirementNetworkBandwidthGbp,
  ec2_getLaunchTemplateInstanceRequirementNetworkBandwidthGbp_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementNetworkBandwidthGbp";
import {
  ec2_getLaunchTemplateInstanceRequirementAcceleratorCount,
  ec2_getLaunchTemplateInstanceRequirementAcceleratorCount_GetTypes,
} from "./ec2_getLaunchTemplateInstanceRequirementAcceleratorCount";

export interface ec2_getLaunchTemplateInstanceRequirement {
  //
  acceleratorTotalMemoryMibs?: Array<ec2_getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib>;

  //
  allowedInstanceTypes?: Array<string>;

  //
  cpuManufacturers?: Array<string>;

  //
  excludedInstanceTypes?: Array<string>;

  //
  memoryGibPerVcpus?: Array<ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus>;

  //
  onDemandMaxPricePercentageOverLowestPrice?: number;

  //
  requireHibernateSupport?: boolean;

  //
  acceleratorNames?: Array<string>;

  //
  vcpuCounts?: Array<ec2_getLaunchTemplateInstanceRequirementVcpuCount>;

  //
  baselineEbsBandwidthMbps?: Array<ec2_getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp>;

  //
  burstablePerformance?: string;

  //
  instanceGenerations?: Array<string>;

  //
  localStorage?: string;

  //
  memoryMibs?: Array<ec2_getLaunchTemplateInstanceRequirementMemoryMib>;

  //
  networkBandwidthGbps?: Array<ec2_getLaunchTemplateInstanceRequirementNetworkBandwidthGbp>;

  //
  spotMaxPricePercentageOverLowestPrice?: number;

  //
  acceleratorManufacturers?: Array<string>;

  //
  localStorageTypes?: Array<string>;

  //
  bareMetal?: string;

  //
  acceleratorTypes?: Array<string>;

  //
  networkInterfaceCounts?: Array<ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount>;

  //
  totalLocalStorageGbs?: Array<ec2_getLaunchTemplateInstanceRequirementTotalLocalStorageGb>;

  //
  acceleratorCounts?: Array<ec2_getLaunchTemplateInstanceRequirementAcceleratorCount>;
}

export function ec2_getLaunchTemplateInstanceRequirement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "acceleratorTotalMemoryMibs",
      "",
      ec2_getLaunchTemplateInstanceRequirementAcceleratorTotalMemoryMib_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowedInstanceTypes",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "cpuManufacturers",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "memoryGibPerVcpus",
      "",
      ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "onDemandMaxPricePercentageOverLowestPrice",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "memoryMibs",
      "",
      ec2_getLaunchTemplateInstanceRequirementMemoryMib_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorTypes",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireHibernateSupport",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorNames",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "baselineEbsBandwidthMbps",
      "",
      ec2_getLaunchTemplateInstanceRequirementBaselineEbsBandwidthMbp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceGenerations",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkBandwidthGbps",
      "",
      ec2_getLaunchTemplateInstanceRequirementNetworkBandwidthGbp_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorManufacturers",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "localStorageTypes",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "networkInterfaceCounts",
      "",
      ec2_getLaunchTemplateInstanceRequirementNetworkInterfaceCount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedInstanceTypes",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "vcpuCounts",
      "",
      ec2_getLaunchTemplateInstanceRequirementVcpuCount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "localStorage", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "spotMaxPricePercentageOverLowestPrice",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "totalLocalStorageGbs",
      "",
      ec2_getLaunchTemplateInstanceRequirementTotalLocalStorageGb_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "acceleratorCounts",
      "",
      ec2_getLaunchTemplateInstanceRequirementAcceleratorCount_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "burstablePerformance",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "bareMetal", "", [], true, false),
  ];
}
