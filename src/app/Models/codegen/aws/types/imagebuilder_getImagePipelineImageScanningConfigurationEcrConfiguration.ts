import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration {
  // The name of the container repository that Amazon Inspector scans
  repositoryName?: string;

  // Tags that are added to the output containers that are scanned
  containerTags?: Array<string>;
}

export function imagebuilder_getImagePipelineImageScanningConfigurationEcrConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'containerTags',
      'Tags that are added to the output containers that are scanned',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'repositoryName',
      'The name of the container repository that Amazon Inspector scans',
      () => [],
      true,
      false,
    ),
  ];
}
