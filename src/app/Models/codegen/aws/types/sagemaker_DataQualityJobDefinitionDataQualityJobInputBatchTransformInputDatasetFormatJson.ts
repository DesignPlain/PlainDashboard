import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson {
  // Indicates if the file should be read as a json object per line.
  line?: boolean;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "line",
      "Indicates if the file should be read as a json object per line.",
      () => [],
      false,
      true,
    ),
  ];
}
