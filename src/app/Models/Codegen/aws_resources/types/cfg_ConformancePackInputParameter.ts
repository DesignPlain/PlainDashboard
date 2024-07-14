import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cfg_ConformancePackInputParameter {
  // The input key.
  parameterName?: string;

  // The input value.
  parameterValue?: string;
}

export function cfg_ConformancePackInputParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "parameterName",
      "The input key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "parameterValue",
      "The input value.",
      [],
      true,
      false,
    ),
  ];
}
