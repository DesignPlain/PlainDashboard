import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateParameterValidation,
  Dataproc_WorkflowTemplateParameterValidation_GetTypes,
} from "./Dataproc_WorkflowTemplateParameterValidation";

export interface Dataproc_WorkflowTemplateParameter {
  // Brief description of the parameter. Must not exceed 1024 characters.
  Description?: string;

  // Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths. A field path is similar in syntax to a .sparkJob.args
  Fields?: Array<string>;

  // Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.
  Name?: string;

  // Validation rules to be applied to this parameter's value.
  Validation?: Dataproc_WorkflowTemplateParameterValidation;
}

export function Dataproc_WorkflowTemplateParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Brief description of the parameter. Must not exceed 1024 characters.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Fields",
      "Required. Paths to all fields that the parameter replaces. A field is allowed to appear in at most one parameter's list of field paths. A field path is similar in syntax to a .sparkJob.args",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Required. Parameter name. The parameter name is used as the key, and paired with the parameter value, which are passed to the template when the template is instantiated. The name must contain only capital letters (A-Z), numbers (0-9), and underscores (_), and must not start with a number. The maximum length is 40 characters.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Validation",
      "Validation rules to be applied to this parameter's value.",
      Dataproc_WorkflowTemplateParameterValidation_GetTypes(),
      false,
      true,
    ),
  ];
}
