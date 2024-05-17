import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Iap_WebRegionBackendServiceIamMemberCondition {
  //
  Description?: string;

  // Textual representation of an expression in Common Expression Language syntax.
  Expression?: string;

  // A title for the expression, i.e. a short string describing its purpose.
  Title?: string;
}

export function Iap_WebRegionBackendServiceIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Description", "", [], false, true),
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
