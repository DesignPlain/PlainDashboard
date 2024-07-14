import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_DataQualityJobDefinitionDataQualityAppSpecification {
  // Sets the environment variables in the container that the monitoring job runs. A list of key value pairs.
  environment?: Map<string, string>;

  // The container image that the data quality monitoring job runs.
  imageUri?: string;

  // An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
  postAnalyticsProcessorSourceUri?: string;

  // An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.
  recordPreprocessorSourceUri?: string;
}

export function sagemaker_DataQualityJobDefinitionDataQualityAppSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "environment",
      "Sets the environment variables in the container that the monitoring job runs. A list of key value pairs.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "imageUri",
      "The container image that the data quality monitoring job runs.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "postAnalyticsProcessorSourceUri",
      "An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "recordPreprocessorSourceUri",
      "An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.",
      [],
      false,
      true,
    ),
  ];
}
