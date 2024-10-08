import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datapipeline_getPipelineDefinitionPipelineObjectField,
  datapipeline_getPipelineDefinitionPipelineObjectField_GetTypes,
} from './datapipeline_getPipelineDefinitionPipelineObjectField';

export interface datapipeline_getPipelineDefinitionPipelineObject {
  // Key-value pairs that define the properties of the object. See below
  fields?: Array<datapipeline_getPipelineDefinitionPipelineObjectField>;

  // ID of the object.
  id?: string;

  // ARN of the storage connector.
  name?: string;
}

export function datapipeline_getPipelineDefinitionPipelineObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'fields',
      'Key-value pairs that define the properties of the object. See below',
      () => datapipeline_getPipelineDefinitionPipelineObjectField_GetTypes(),
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
