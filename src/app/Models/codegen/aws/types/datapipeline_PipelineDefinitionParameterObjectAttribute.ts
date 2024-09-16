import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datapipeline_PipelineDefinitionParameterObjectAttribute {
  // Field identifier.
  key?: string;

  // Field value, expressed as a String.
  stringValue?: string;
}

export function datapipeline_PipelineDefinitionParameterObjectAttribute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'Field identifier.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'stringValue',
      'Field value, expressed as a String.',
      () => [],
      true,
      false,
    ),
  ];
}
