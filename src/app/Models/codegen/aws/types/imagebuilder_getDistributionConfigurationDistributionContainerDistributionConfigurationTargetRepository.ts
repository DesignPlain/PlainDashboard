import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository {
  // Name of the container repository where the output container image is stored.
  repositoryName?: string;

  // Service in which the image is registered.
  service?: string;
}

export function imagebuilder_getDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "Name of the container repository where the output container image is stored.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Service in which the image is registered.",
      () => [],
      true,
      false,
    ),
  ];
}
