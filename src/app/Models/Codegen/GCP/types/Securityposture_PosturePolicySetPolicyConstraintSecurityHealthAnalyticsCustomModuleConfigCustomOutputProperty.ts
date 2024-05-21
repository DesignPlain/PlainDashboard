import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression,
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression_GetTypes,
} from "./securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression";

export interface securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty {
  // Name of the property for the custom output.
  name?: string;

  /*
The CEL expression for the custom output. A resource property can be
specified to return the value of the property or a text string enclosed
in quotation marks.
Structure is documented below.
*/
  valueExpression?: securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression;
}

export function securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the property for the custom output.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "valueExpression",
      "The CEL expression for the custom output. A resource property can be\nspecified to return the value of the property or a text string enclosed\nin quotation marks.\nStructure is documented below.",
      securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression_GetTypes(),
      false,
      false,
    ),
  ];
}
