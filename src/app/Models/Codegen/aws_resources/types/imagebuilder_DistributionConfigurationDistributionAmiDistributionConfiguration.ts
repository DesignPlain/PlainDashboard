import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission,
  imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission_GetTypes,
} from "./imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission";

export interface imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration {
  // Key-value map of tags to apply to the distributed AMI.
  amiTags?: Map<string, string>;

  // Description to apply to the distributed AMI.
  description?: string;

  // Amazon Resource Name (ARN) of the Key Management Service (KMS) Key to encrypt the distributed AMI.
  kmsKeyId?: string;

  // Configuration block of EC2 launch permissions to apply to the distributed AMI. Detailed below.
  launchPermission?: imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;

  // Name to apply to the distributed AMI.
  name?: string;

  // Set of AWS Account identifiers to distribute the AMI.
  targetAccountIds?: Array<string>;
}

export function imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "amiTags",
      "Key-value map of tags to apply to the distributed AMI.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description to apply to the distributed AMI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyId",
      "Amazon Resource Name (ARN) of the Key Management Service (KMS) Key to encrypt the distributed AMI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "launchPermission",
      "Configuration block of EC2 launch permissions to apply to the distributed AMI. Detailed below.",
      imagebuilder_DistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name to apply to the distributed AMI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "targetAccountIds",
      "Set of AWS Account identifiers to distribute the AMI.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
