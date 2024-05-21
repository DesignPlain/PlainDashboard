import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface organizations_getIAMPolicyBindingCondition {
  // An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  expression?: string;

  // A title for the expression, i.e. a short string describing its purpose.
  title?: string;
}

export function organizations_getIAMPolicyBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "title",
      "A title for the expression, i.e. a short string describing its purpose.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "expression",
      "Textual representation of an expression in Common Expression Language syntax.",
      [],
      true,
      false,
    ),
  ];
}
