export interface AutomationRuleAdvanceRolloutRule {
  /*
Optional. Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^a-z?$`.

- - -
*/
  SourcePhases?: Array<string>;

  // Optional. How long to wait after a rollout is finished.
  Wait?: string;

  // Required. ID of the rule. This id must be unique in the `Automation` resource to which this rule belongs. The format is `a-z{0,62}`.
  Id?: string;
}
