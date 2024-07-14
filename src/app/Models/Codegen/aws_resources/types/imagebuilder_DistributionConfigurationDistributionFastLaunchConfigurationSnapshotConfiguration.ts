import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration {
  // The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
  targetResourceCount?: number;
}

export function imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "targetResourceCount",
      "The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.",
      [],
      false,
      false,
    ),
  ];
}
