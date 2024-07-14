import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource {
  // The Amazon S3 URI for the statistics resource.
  s3Uri?: string;
}

export function sagemaker_DataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "The Amazon S3 URI for the statistics resource.",
      [],
      false,
      true,
    ),
  ];
}
