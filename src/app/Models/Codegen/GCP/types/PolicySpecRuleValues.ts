export interface PolicySpecRuleValues {
  // List of values allowed at this resource.
  AllowedValues?: Array<string>;

  // List of values denied at this resource.
  DeniedValues?: Array<string>;
}
