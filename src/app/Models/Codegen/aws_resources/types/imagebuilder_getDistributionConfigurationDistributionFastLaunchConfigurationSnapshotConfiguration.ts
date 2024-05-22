import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration {
  // The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.
  targetResourceCount?: number;
}

export function imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "targetResourceCount",
      "The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.",
      [],
      true,
      false,
    ),
  ];
}
