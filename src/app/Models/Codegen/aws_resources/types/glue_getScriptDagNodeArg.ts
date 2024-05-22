import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface glue_getScriptDagNodeArg {
  // Boolean if the value is used as a parameter. Defaults to `false`.
  param?: boolean;

  // Value of the argument or property.
  value?: string;

  // Name of the argument or property.
  name?: string;
}

export function glue_getScriptDagNodeArg_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "param",
      "Boolean if the value is used as a parameter. Defaults to `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of the argument or property.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the argument or property.",
      [],
      true,
      false,
    ),
  ];
}
