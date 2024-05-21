import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty,
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty_GetTypes,
} from "./securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty";

export interface securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput {
  /*
A list of custom output properties to add to the finding.
Structure is documented below.
*/
  properties?: Array<securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty>;
}

export function securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "properties",
      "A list of custom output properties to add to the finding.\nStructure is documented below.",
      securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
