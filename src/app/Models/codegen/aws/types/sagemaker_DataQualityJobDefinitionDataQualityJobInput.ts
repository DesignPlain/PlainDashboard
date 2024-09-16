import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput,
  sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput_GetTypes,
} from './sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput';
import {
  sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput,
  sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput_GetTypes,
} from './sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput';

export interface sagemaker_DataQualityJobDefinitionDataQualityJobInput {
  // Input object for the batch transform job. Fields are documented below.
  batchTransformInput?: sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput;

  // Input object for the endpoint. Fields are documented below.
  endpointInput?: sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput;
}

export function sagemaker_DataQualityJobDefinitionDataQualityJobInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'batchTransformInput',
      'Input object for the batch transform job. Fields are documented below.',
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityJobInputBatchTransformInput_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'endpointInput',
      'Input object for the endpoint. Fields are documented below.',
      () =>
        sagemaker_DataQualityJobDefinitionDataQualityJobInputEndpointInput_GetTypes(),
      false,
      true,
    ),
  ];
}
