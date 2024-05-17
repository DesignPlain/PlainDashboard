import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty,
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty";

export interface Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput {
  /*
A list of custom output properties to add to the finding.
Structure is documented below.
*/
  Properties?: Array<Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty>;
}

export function Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Properties",
      "A list of custom output properties to add to the finding.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
