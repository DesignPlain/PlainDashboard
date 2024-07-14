import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_getImageImageScanningConfigurationEcrConfiguration {
  // The name of the container repository that Amazon Inspector scans to identify findings for your container images.
  repositoryName?: string;

  // Set of tags for Image Builder to apply to the output container image that that Amazon Inspector scans.
  containerTags?: Array<string>;
}

export function imagebuilder_getImageImageScanningConfigurationEcrConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "The name of the container repository that Amazon Inspector scans to identify findings for your container images.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containerTags",
      "Set of tags for Image Builder to apply to the output container image that that Amazon Inspector scans.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
