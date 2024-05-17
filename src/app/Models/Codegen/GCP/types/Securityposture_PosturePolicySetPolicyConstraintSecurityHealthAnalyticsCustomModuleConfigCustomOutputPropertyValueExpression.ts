import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression {
  // Title for the expression, i.e. a short string describing its purpose.
  Title?: string;

  // Description of the expression
  Description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;

  // String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  Location?: string;
}

export function Securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfigCustomOutputPropertyValueExpression_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Title",
      "Title for the expression, i.e. a short string describing its purpose.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Description of the expression",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Expression",
      "Textual representation of an expression in Common Expression Language syntax.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "String indicating the location of the expression for error reporting, e.g. a file name and a position in the file",
      [],
      false,
      false,
    ),
  ];
}
