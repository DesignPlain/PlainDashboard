import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource {
  // The Amazon S3 URI for the constraints resource.
  s3Uri?: string;
}

export function sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "The Amazon S3 URI for the constraints resource.",
      [],
      false,
      true,
    ),
  ];
}
