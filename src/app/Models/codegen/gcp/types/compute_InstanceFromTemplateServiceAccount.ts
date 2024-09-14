import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface compute_InstanceFromTemplateServiceAccount {
  // The service account e-mail address.
  email?: string;

  // A list of service scopes.
  scopes?: Array<string>;
}

export function compute_InstanceFromTemplateServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "email",
      "The service account e-mail address.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scopes",
      "A list of service scopes.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
