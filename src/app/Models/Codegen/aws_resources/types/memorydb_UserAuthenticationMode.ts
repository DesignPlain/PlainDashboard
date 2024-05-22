import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface memorydb_UserAuthenticationMode {
  // The number of passwords belonging to the user.
  passwordCount?: number;

  // The set of passwords used for authentication. You can create up to two passwords for each user.
  passwords?: Array<string>;

  // Indicates whether the user requires a password to authenticate. Must be set to `password`.
  type?: string;
}

export function memorydb_UserAuthenticationMode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "passwordCount",
      "The number of passwords belonging to the user.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "passwords",
      "The set of passwords used for authentication. You can create up to two passwords for each user.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Indicates whether the user requires a password to authenticate. Must be set to `password`.",
      [],
      true,
      false,
    ),
  ];
}
