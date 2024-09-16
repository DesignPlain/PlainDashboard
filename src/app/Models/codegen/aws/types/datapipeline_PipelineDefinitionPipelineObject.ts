import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datapipeline_PipelineDefinitionPipelineObjectField,
  datapipeline_PipelineDefinitionPipelineObjectField_GetTypes,
} from './datapipeline_PipelineDefinitionPipelineObjectField';

export interface datapipeline_PipelineDefinitionPipelineObject {
  // Configuration block for Key-value pairs that define the properties of the object. See below
  fields?: Array<datapipeline_PipelineDefinitionPipelineObjectField>;

  // ID of the object.
  id?: string;

  // ARN of the storage connector.
  name?: string;
}

export function datapipeline_PipelineDefinitionPipelineObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'fields',
      'Configuration block for Key-value pairs that define the properties of the object. See below',
      () => datapipeline_PipelineDefinitionPipelineObjectField_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'ID of the object.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'ARN of the storage connector.',
      () => [],
      true,
      false,
    ),
  ];
}
