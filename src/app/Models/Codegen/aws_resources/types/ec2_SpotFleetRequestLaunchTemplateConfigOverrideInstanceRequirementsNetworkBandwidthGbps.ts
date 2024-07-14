import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps {
  // Maximum.
  max?: number;

  // Minimum.
  min?: number;
}

export function ec2_SpotFleetRequestLaunchTemplateConfigOverrideInstanceRequirementsNetworkBandwidthGbps_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "max", "Maximum.", [], false, true),
    new DynamicUIProps(InputType.Number, "min", "Minimum.", [], false, true),
  ];
}
