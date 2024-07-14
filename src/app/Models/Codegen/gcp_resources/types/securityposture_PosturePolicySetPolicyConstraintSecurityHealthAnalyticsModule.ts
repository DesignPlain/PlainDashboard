import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule {
  /*
The state of enablement for the module at its level of the resource hierarchy.
Possible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.
*/
  moduleEnablementState?: string;

  // The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED.
  moduleName?: string;
}

export function securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "moduleEnablementState",
      "The state of enablement for the module at its level of the resource hierarchy.\nPossible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "moduleName",
      "The name of the module eg: BIGQUERY_TABLE_CMEK_DISABLED.",
      [],
      true,
      false,
    ),
  ];
}
