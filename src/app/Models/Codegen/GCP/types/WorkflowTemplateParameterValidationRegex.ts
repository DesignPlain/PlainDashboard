export interface WorkflowTemplateParameterValidationRegex {
  // Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its entirety (substring matches are not sufficient).
  Regexes?: Array<string>;
}
