import { WorkflowTemplateParameterValidationValues } from "./WorkflowTemplateParameterValidationValues";
import { WorkflowTemplateParameterValidationRegex } from "./WorkflowTemplateParameterValidationRegex";

export interface WorkflowTemplateParameterValidation {
  // Validation based on regular expressions.
  Regex?: WorkflowTemplateParameterValidationRegex;

  // Validation based on a list of allowed values.
  Values?: WorkflowTemplateParameterValidationValues;
}
