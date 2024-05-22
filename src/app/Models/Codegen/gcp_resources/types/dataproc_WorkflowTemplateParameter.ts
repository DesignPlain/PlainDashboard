import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_WorkflowTemplateParameterValidation,
  dataproc_WorkflowTemplateParameterValidation_GetTypes,
} from "./dataproc_WorkflowTemplateParameterValidation";

export interface dataproc_WorkflowTemplateParameter {
  // Brief description of the parameter. Must not exceed 1024 characters.
  description?: string;

  // Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths. A field path is similar in syntax to a .sparkJob.args
  fields?: Array<string>;

  // Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.
  name?: string;

  // Validation rules to be applied to this parameter's value.
  validation?: dataproc_WorkflowTemplateParameterValidation;
}

export function dataproc_WorkflowTemplateParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "validation",
      "Validation rules to be applied to this parameter's value.",
      dataproc_WorkflowTemplateParameterValidation_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Brief description of the parameter. Must not exceed 1024 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fields",
      "Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths. A field path is similar in syntax to a .sparkJob.args",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
