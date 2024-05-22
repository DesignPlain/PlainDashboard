import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository,
  imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository_GetTypes,
} from "./imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository";

export interface imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration {
  // Set of tags that are attached to the container distribution configuration.
  containerTags?: Array<string>;

  // Description of the container distribution configuration.
  description?: string;

  // Configuration block with the destination repository for the container distribution configuration.
  targetRepository?: imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;
}

export function imagebuilder_DistributionConfigurationDistributionContainerDistributionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the container distribution configuration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "targetRepository",
      "Configuration block with the destination repository for the container distribution configuration.",
      imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containerTags",
      "Set of tags that are attached to the container distribution configuration.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
