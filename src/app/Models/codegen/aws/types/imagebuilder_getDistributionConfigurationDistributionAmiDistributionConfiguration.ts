import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission,
  imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission_GetTypes,
} from "./imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission";

export interface imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration {
  // Description of the container distribution configuration.
  description?: string;

  // ARN of Key Management Service (KMS) Key to encrypt AMI.
  kmsKeyId?: string;

  // Nested list of EC2 launch permissions.
  launchPermissions?: Array<imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission>;

  // Name of the distribution configuration.
  name?: string;

  // Set of target AWS Account identifiers.
  targetAccountIds?: Array<string>;

  // Key-value map of tags to apply to distributed AMI.
  amiTags?: Map<string, string>;
}

export function imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the container distribution configuration.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "ARN of Key Management Service (KMS) Key to encrypt AMI.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "launchPermissions",
      "Nested list of EC2 launch permissions.",
      () =>
        imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the distribution configuration.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetAccountIds",
      "Set of target AWS Account identifiers.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "amiTags",
      "Key-value map of tags to apply to distributed AMI.",
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
  ];
}
