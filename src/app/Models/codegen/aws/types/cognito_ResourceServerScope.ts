import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cognito_ResourceServerScope {
  // The scope description.
  scopeDescription?: string;

  // The scope name.
  scopeName?: string;
}

export function cognito_ResourceServerScope_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scopeDescription",
      "The scope description.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "scopeName",
      "The scope name.",
      () => [],
      true,
      false,
    ),
  ];
}
