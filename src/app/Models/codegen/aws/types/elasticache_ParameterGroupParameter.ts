import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface elasticache_ParameterGroupParameter {
  // The value of the ElastiCache parameter.
  value?: string;

  // The name of the ElastiCache parameter.
  name?: string;
}

export function elasticache_ParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value of the ElastiCache parameter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the ElastiCache parameter.',
      () => [],
      true,
      false,
    ),
  ];
}
