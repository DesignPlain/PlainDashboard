import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getInstanceServiceAccount {
  // The service account e-mail address.
  Email?: string;

  // A list of service scopes.
  Scopes?: Array<string>;
}

export function Compute_getInstanceServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Email",
      "The service account e-mail address.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Scopes",
      "A list of service scopes.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
