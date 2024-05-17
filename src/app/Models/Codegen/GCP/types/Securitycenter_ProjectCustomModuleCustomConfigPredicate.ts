import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securitycenter_ProjectCustomModuleCustomConfigPredicate {
  /*
String indicating the location of the expression for error reporting, e.g. a
file name and a position in the file.
*/
  Location?: string;

  /*
Title for the expression, i.e. a short string describing its purpose. This can
be used e.g. in UIs which allow to enter the expression.
*/
  Title?: string;

  /*
Description of the expression. This is a longer text which describes the
expression, e.g. when hovered over it in a UI.
*/
  Description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;
}

export function Securitycenter_ProjectCustomModuleCustomConfigPredicate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Location",
      "String indicating the location of the expression for error reporting, e.g. a\nfile name and a position in the file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Title",
      "Title for the expression, i.e. a short string describing its purpose. This can\nbe used e.g. in UIs which allow to enter the expression.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Description of the expression. This is a longer text which describes the\nexpression, e.g. when hovered over it in a UI.",
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
  ];
}
