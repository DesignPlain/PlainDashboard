export interface PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule {
  /*
The state of enablement for the module at its level of the resource hierarchy.
Possible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.
*/
  ModuleEnablementState?: string;

  // The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED.
  ModuleName?: string;
}
