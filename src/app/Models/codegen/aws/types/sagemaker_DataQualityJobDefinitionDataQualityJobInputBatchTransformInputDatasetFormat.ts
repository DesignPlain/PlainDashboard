import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv,
  sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv_GetTypes,
} from './sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv';
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson,
  sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson_GetTypes,
} from './sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson';

export interface sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat {
  // The CSV dataset used in the monitoring job. Fields are documented below.
  csv?: sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv;

  // The JSON dataset used in the monitoring job. Fields are documented below.
  json?: sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'csv',
      'The CSV dataset used in the monitoring job. Fields are documented below.',
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'json',
      'The JSON dataset used in the monitoring job. Fields are documented below.',
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson_GetTypes(),
      false,
      true,
    ),
  ];
}
