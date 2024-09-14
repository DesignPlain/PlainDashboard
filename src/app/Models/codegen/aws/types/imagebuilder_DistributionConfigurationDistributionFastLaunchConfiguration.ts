import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate,
  imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate_GetTypes,
} from "./imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate";
import {
  imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration,
  imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration_GetTypes,
} from "./imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration";

export interface imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration {
  // Configuration block for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled. Detailed below.
  snapshotConfiguration?: imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration;

  // The owner account ID for the fast-launch enabled Windows AMI.
  accountId?: string;

  // A Boolean that represents the current state of faster launching for the Windows AMI. Set to `true` to start using Windows faster launching, or `false` to stop using it.
  enabled?: boolean;

  // Configuration block for the launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots. Detailed below.
  launchTemplate?: imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate;

  // The maximum number of parallel instances that are launched for creating resources.
  maxParallelLaunches?: number;
}

export function imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxParallelLaunches",
      "The maximum number of parallel instances that are launched for creating resources.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "snapshotConfiguration",
      "Configuration block for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled. Detailed below.",
      () =>
        imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The owner account ID for the fast-launch enabled Windows AMI.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "A Boolean that represents the current state of faster launching for the Windows AMI. Set to `true` to start using Windows faster launching, or `false` to stop using it.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "launchTemplate",
      "Configuration block for the launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots. Detailed below.",
      () =>
        imagebuilder_DistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate_GetTypes(),
      false,
      false,
    ),
  ];
}
