import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_ImageImageScanningConfigurationEcrConfiguration {
  // Set of tags for Image Builder to apply to the output container image that that Amazon Inspector scans.
  containerTags?: Array<string>;

  // The name of the container repository that Amazon Inspector scans to identify findings for your container images.
  repositoryName?: string;
}

export function imagebuilder_ImageImageScanningConfigurationEcrConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "containerTags",
      "Set of tags for Image Builder to apply to the output container image that that Amazon Inspector scans.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "The name of the container repository that Amazon Inspector scans to identify findings for your container images.",
      [],
      false,
      false,
    ),
  ];
}
