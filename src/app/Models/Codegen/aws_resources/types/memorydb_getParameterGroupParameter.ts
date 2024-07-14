import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface memorydb_getParameterGroupParameter {
  // Name of the parameter group.
  name?: string;

  // Value of the parameter.
  value?: string;
}

export function memorydb_getParameterGroupParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the parameter group.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the parameter.",
      [],
      true,
      false,
    ),
  ];
}
