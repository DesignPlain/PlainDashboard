import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface memorydb_getUserAuthenticationMode {
  // The number of passwords belonging to the user.
  passwordCount?: number;

  // Whether the user requires a password to authenticate.
  type?: string;
}

export function memorydb_getUserAuthenticationMode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Whether the user requires a password to authenticate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "passwordCount",
      "The number of passwords belonging to the user.",
      [],
      true,
      false,
    ),
  ];
}
