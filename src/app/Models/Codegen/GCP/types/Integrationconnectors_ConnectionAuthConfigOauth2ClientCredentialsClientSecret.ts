import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret {
  /*
The resource name of the secret version in the format,
format as: projects/-/secrets/-/versions/-.
*/
  SecretVersion?: string;
}

export function Integrationconnectors_ConnectionAuthConfigOauth2ClientCredentialsClientSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SecretVersion",
      "The resource name of the secret version in the format,\nformat as: projects/*/secrets/*/versions/*.",
      [],
      true,
      false,
    ),
  ];
}
