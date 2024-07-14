import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps {
  // The maximum number of vCPUs. To specify no maximum limit, omit this parameter.
  max?: number;

  // The minimum number of vCPUs. To specify no minimum limit, specify `0`.
  min?: number;
}

export function ec2_FleetLaunchTemplateConfigOverrideInstanceRequirementsBaselineEbsBandwidthMbps_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "max",
      "The maximum number of vCPUs. To specify no maximum limit, omit this parameter.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "min",
      "The minimum number of vCPUs. To specify no minimum limit, specify `0`.",
      [],
      false,
      false,
    ),
  ];
}
