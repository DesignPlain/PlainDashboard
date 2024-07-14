import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration,
  imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration_GetTypes,
} from "./imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration";
import {
  imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate,
  imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate_GetTypes,
} from "./imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate";

export interface imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration {
  // The account ID that this configuration applies to.
  accountId?: string;

  // A Boolean that represents the current state of faster launching for the Windows AMI.
  enabled?: boolean;

  // Nested list of launch templates that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
  launchTemplates?: Array<imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate>;

  // The maximum number of parallel instances that are launched for creating resources.
  maxParallelLaunches?: number;

  // Nested list of configurations for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.
  snapshotConfigurations?: Array<imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration>;
}

export function imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The account ID that this configuration applies to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "A Boolean that represents the current state of faster launching for the Windows AMI.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "launchTemplates",
      "Nested list of launch templates that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.",
      imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxParallelLaunches",
      "The maximum number of parallel instances that are launched for creating resources.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "snapshotConfigurations",
      "Nested list of configurations for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.",
      imagebuilder_getDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
