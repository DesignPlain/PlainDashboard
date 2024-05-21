import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_WorkflowTemplateParameterValidationValues {
  // Required. List of allowed values for the parameter.
  values?: Array<string>;
}

export function dataproc_WorkflowTemplateParameterValidationValues_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Required. List of allowed values for the parameter.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
