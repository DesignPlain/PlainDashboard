export interface PreventionJobTriggerInspectJobInspectConfigRuleSetRuleExclusionRuleRegex {
  // The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  GroupIndexes?: Array<number>;

  /*
Pattern defining the regular expression.
Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
*/
  Pattern?: string;
}
