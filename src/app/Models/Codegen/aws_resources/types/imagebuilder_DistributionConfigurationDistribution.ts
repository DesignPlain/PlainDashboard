import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration,
  imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration_GetTypes,
} from "./imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration";
import {
  imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration,
  imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration_GetTypes,
} from "./imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration";
import {
  imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration,
  imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration_GetTypes,
} from "./imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration";
import {
  imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration,
  imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration_GetTypes,
} from "./imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration";

export interface imagebuilder_DistributionConfigurationDistribution {
  // Configuration block with Amazon Machine Image (AMI) distribution settings. Detailed below.
  amiDistributionConfiguration?: imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration;

  // Configuration block with container distribution settings. Detailed below.
  containerDistributionConfiguration?: imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration;

  // Set of Windows faster-launching configurations to use for AMI distribution. Detailed below.
  fastLaunchConfigurations?: Array<imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration>;

  // Set of launch template configuration settings that apply to image distribution. Detailed below.
  launchTemplateConfigurations?: Array<imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration>;

  // Set of Amazon Resource Names (ARNs) of License Manager License Configurations.
  licenseConfigurationArns?: Array<string>;

  /*
AWS Region for the distribution.

The following arguments are optional:
*/
  region?: string;
}

export function imagebuilder_DistributionConfigurationDistribution_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "amiDistributionConfiguration",
      "Configuration block with Amazon Machine Image (AMI) distribution settings. Detailed below.",
      imagebuilder_DistributionConfigurationDistributionAmiDistributionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "containerDistributionConfiguration",
      "Configuration block with container distribution settings. Detailed below.",
      imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fastLaunchConfigurations",
      "Set of Windows faster-launching configurations to use for AMI distribution. Detailed below.",
      imagebuilder_DistributionConfigurationDistributionFastLaunchConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "launchTemplateConfigurations",
      "Set of launch template configuration settings that apply to image distribution. Detailed below.",
      imagebuilder_DistributionConfigurationDistributionLaunchTemplateConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "licenseConfigurationArns",
      "Set of Amazon Resource Names (ARNs) of License Manager License Configurations.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "AWS Region for the distribution.\n\nThe following arguments are optional:",
      [],
      true,
      false,
    ),
  ];
}
