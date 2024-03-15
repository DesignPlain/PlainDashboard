import { PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig } from "./PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig";

export interface PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule {
  /*
The display name of the Security Health Analytics custom module. This
display name becomes the finding category for all findings that are
returned by this custom module.
*/
  DisplayName?: string;

  /*
(Output)
A server generated id of custom module.
*/
  Id?: string;

  /*
The state of enablement for the module at its level of the resource hierarchy.
Possible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.
*/
  ModuleEnablementState?: string;

  /*
Custom module details.
Structure is documented below.
*/
  Config?: PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig;
}
