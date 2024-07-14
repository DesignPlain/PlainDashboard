import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration {
  //
  containerTags?: Array<string>;

  // The name of the repository to scan
  repositoryName?: string;
}

export function imagebuilder_ImagePipelineImageScanningConfigurationEcrConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "containerTags",
      "",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "repositoryName",
      "The name of the repository to scan",
      [],
      false,
      false,
    ),
  ];
}
