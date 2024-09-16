import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository,
  imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository_GetTypes,
} from './imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository';

export interface imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration {
  // Description of the container distribution configuration.
  description?: string;

  // Configuration block with the destination repository for the container distribution configuration.
  targetRepository?: imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;

  // Set of tags that are attached to the container distribution configuration.
  containerTags?: Array<string>;
}

export function imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'containerTags',
      'Set of tags that are attached to the container distribution configuration.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'description',
      'Description of the container distribution configuration.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'targetRepository',
      'Configuration block with the destination repository for the container distribution configuration.',
      () =>
        imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository_GetTypes(),
      true,
      false,
    ),
  ];
}
