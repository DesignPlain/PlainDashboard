import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository {
  // The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
  repositoryName?: string;

  // The service in which this image is registered. Valid values: `ECR`.
  service?: string;
}

export function imagebuilder_DistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "The name of the container repository where the output container image is stored. This name is prefixed by the repository location.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "The service in which this image is registered. Valid values: `ECR`.",
      [],
      true,
      false,
    ),
  ];
}
