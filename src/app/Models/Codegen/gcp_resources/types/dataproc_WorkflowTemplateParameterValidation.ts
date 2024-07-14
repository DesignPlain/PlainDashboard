import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_WorkflowTemplateParameterValidationValues,
  dataproc_WorkflowTemplateParameterValidationValues_GetTypes,
} from "./dataproc_WorkflowTemplateParameterValidationValues";
import {
  dataproc_WorkflowTemplateParameterValidationRegex,
  dataproc_WorkflowTemplateParameterValidationRegex_GetTypes,
} from "./dataproc_WorkflowTemplateParameterValidationRegex";

export interface dataproc_WorkflowTemplateParameterValidation {
  // Validation based on a list of allowed values.
  values?: dataproc_WorkflowTemplateParameterValidationValues;

  // Validation based on regular expressions.
  regex?: dataproc_WorkflowTemplateParameterValidationRegex;
}

export function dataproc_WorkflowTemplateParameterValidation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "values",
      "Validation based on a list of allowed values.",
      dataproc_WorkflowTemplateParameterValidationValues_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regex",
      "Validation based on regular expressions.",
      dataproc_WorkflowTemplateParameterValidationRegex_GetTypes(),
      false,
      true,
    ),
  ];
}
