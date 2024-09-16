import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration,
  imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration_GetTypes,
} from './imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration';
import {
  imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration,
  imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration_GetTypes,
} from './imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration';
import {
  imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration,
  imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration_GetTypes,
} from './imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration';
import {
  imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration,
  imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration_GetTypes,
} from './imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration';

export interface imagebuilder_getDistributionConfigurationDistribution {
  // Nested list of AMI distribution configuration.
  amiDistributionConfigurations?: Array<imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration>;

  // Nested list of container distribution configurations.
  containerDistributionConfigurations?: Array<imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration>;

  // Nested list of Windows faster-launching configurations to use for AMI distribution.
  fastLaunchConfigurations?: Array<imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration>;

  // Nested list of launch template configurations.
  launchTemplateConfigurations?: Array<imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration>;

  // Set of Amazon Resource Names (ARNs) of License Manager License Configurations.
  licenseConfigurationArns?: Array<string>;

  // AWS Region of distribution.
  region?: string;
}

export function imagebuilder_getDistributionConfigurationDistribution_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'amiDistributionConfigurations',
      'Nested list of AMI distribution configuration.',
      () =>
        imagebuilder_getDistributionConfigurationDistributionAmiDistributionConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'containerDistributionConfigurations',
      'Nested list of container distribution configurations.',
      () =>
        imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'fastLaunchConfigurations',
      'Nested list of Windows faster-launching configurations to use for AMI distribution.',
      () =>
        imagebuilder_getDistributionConfigurationDistributionFastLaunchConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'launchTemplateConfigurations',
      'Nested list of launch template configurations.',
      () =>
        imagebuilder_getDistributionConfigurationDistributionLaunchTemplateConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'licenseConfigurationArns',
      'Set of Amazon Resource Names (ARNs) of License Manager License Configurations.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      'AWS Region of distribution.',
      () => [],
      true,
      false,
    ),
  ];
}
