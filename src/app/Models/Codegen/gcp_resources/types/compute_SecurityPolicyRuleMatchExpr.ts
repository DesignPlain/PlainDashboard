import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface compute_SecurityPolicyRuleMatchExpr {
  /*
Textual representation of an expression in Common Expression Language syntax.
The application context of the containing message determines which well-known feature set of CEL is supported.
*/
  expression?: string;
}

export function compute_SecurityPolicyRuleMatchExpr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "expression",
      "Textual representation of an expression in Common Expression Language syntax.\nThe application context of the containing message determines which well-known feature set of CEL is supported.",
      [],
      true,
      false,
    ),
  ];
}
