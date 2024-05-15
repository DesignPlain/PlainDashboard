import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule {
  /*
The state of enablement for the module at its level of the resource hierarchy.
Possible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.
*/
  ModuleEnablementState?: string;

  // The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED.
  ModuleName?: string;
}

export function Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ModuleEnablementState",
      "The state of enablement for the module at its level of the resource hierarchy.\nPossible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ModuleName",
      "The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED.",
      [],
      true,
      false,
    ),
  ];
}
