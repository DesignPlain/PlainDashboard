import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticache_ParameterGroupParameter {
  // The name of the ElastiCache parameter.
  name?: string;

  // The value of the ElastiCache parameter.
  value?: string;
}

export function elasticache_ParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the ElastiCache parameter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the ElastiCache parameter.",
      [],
      true,
      false,
    ),
  ];
}
