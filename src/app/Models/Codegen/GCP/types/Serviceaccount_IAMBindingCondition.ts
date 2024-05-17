import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Serviceaccount_IAMBindingCondition {
  /*
An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

> --Warning:-- This provider considers the `role` and condition contents (`title`+`description`+`expression`) as the
identifier for the binding. This means that if any part of the condition is changed out-of-band, the provider will
consider it to be an entirely different resource and will treat it as such.
*/
  Description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;

  // A title for the expression, i.e. a short string describing its purpose.
  Title?: string;
}

export function Serviceaccount_IAMBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.\n\n> **Warning:** This provider considers the `role` and condition contents (`title`+`description`+`expression`) as the\nidentifier for the binding. This means that if any part of the condition is changed out-of-band, the provider will\nconsider it to be an entirely different resource and will treat it as such.",
      [],
      false,
      true,
    ),
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
  ];
}
