export interface PreventionJobTriggerInspectJobInspectConfigRuleSetRuleHotwordRuleProximity {
  // Number of characters after the finding to consider. Either this or window_before must be specified
  WindowAfter?: number;

  // Number of characters before the finding to consider. Either this or window_after must be specified
  WindowBefore?: number;
}
