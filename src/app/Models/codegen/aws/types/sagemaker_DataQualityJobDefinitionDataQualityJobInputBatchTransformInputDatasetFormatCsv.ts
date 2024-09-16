import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv {
  // Indicates if the CSV data has a header.
  header?: boolean;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'header',
      'Indicates if the CSV data has a header.',
      () => [],
      false,
      true,
    ),
  ];
}
