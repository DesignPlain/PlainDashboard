import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface elasticache_UserAuthenticationMode {
  // Specifies the authentication type. Possible options are: `password`, `no-password-required` or `iam`.
  type?: string;

  //
  passwordCount?: number;

  // Specifies the passwords to use for authentication if `type` is set to `password`.
  passwords?: Array<string>;
}

export function elasticache_UserAuthenticationMode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Specifies the authentication type. Possible options are: `password`, `no-password-required` or `iam`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "passwordCount", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "passwords",
      "Specifies the passwords to use for authentication if `type` is set to `password`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
