import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_getContainerRecipeTargetRepository {
  // Name of the container repository where the output container image is stored. The name is prefixed by the repository location.
  repositoryName?: string;

  // Service in which this image is registered.
  service?: string;
}

export function imagebuilder_getContainerRecipeTargetRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "Name of the container repository where the output container image is stored. The name is prefixed by the repository location.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "service",
      "Service in which this image is registered.",
      [],
      true,
      false,
    ),
  ];
}
