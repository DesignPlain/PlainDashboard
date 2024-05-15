import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateParameterValidationValues,
  Dataproc_WorkflowTemplateParameterValidationValues_GetTypes,
} from "./Dataproc_WorkflowTemplateParameterValidationValues";
import {
  Dataproc_WorkflowTemplateParameterValidationRegex,
  Dataproc_WorkflowTemplateParameterValidationRegex_GetTypes,
} from "./Dataproc_WorkflowTemplateParameterValidationRegex";

export interface Dataproc_WorkflowTemplateParameterValidation {
  // Validation based on a list of allowed values.
  Values?: Dataproc_WorkflowTemplateParameterValidationValues;

  // Validation based on regular expressions.
  Regex?: Dataproc_WorkflowTemplateParameterValidationRegex;
}

export function Dataproc_WorkflowTemplateParameterValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Values",
      "Validation based on a list of allowed values.",
      Dataproc_WorkflowTemplateParameterValidationValues_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Regex",
      "Validation based on regular expressions.",
      Dataproc_WorkflowTemplateParameterValidationRegex_GetTypes(),
      false,
      true,
    ),
  ];
}
