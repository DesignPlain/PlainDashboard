import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression,
  Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression_GetTypes,
} from "./Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression";

export interface Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty {
  // Name of the property for the custom output.
  Name?: string;

  /*
The CEL expression for the custom output. A resource property can be
specified to return the value of the property or a text string enclosed
in quotation marks.
Structure is documented below.
*/
  ValueExpression?: Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression;
}

export function Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the property for the custom output.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ValueExpression",
      "The CEL expression for the custom output. A resource property can be\nspecified to return the value of the property or a text string enclosed\nin quotation marks.\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression_GetTypes(),
      false,
      false,
    ),
  ];
}
