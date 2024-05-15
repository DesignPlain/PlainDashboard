import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_MachineImageIamBindingCondition {
  // An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  Description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;

  // A title for the expression, i.e. a short string describing its purpose.
  Title?: string;
}

export function Compute_MachineImageIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Expression",
      "Textual representation of an expression in Common Expression Language syntax.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Title",
      "A title for the expression, i.e. a short string describing its purpose.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.",
      [],
      false,
      true,
    ),
  ];
}
