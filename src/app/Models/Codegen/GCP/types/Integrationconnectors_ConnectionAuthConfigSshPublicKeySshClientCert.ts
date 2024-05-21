import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert {
  /*
The resource name of the secret version in the format,
format as: projects/-/secrets/-/versions/-.
*/
  secretVersion?: string;
}

export function integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCert_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretVersion",
      "The resource name of the secret version in the format,\nformat as: projects/*/secrets/*/versions/*.",
      [],
      true,
      false,
    ),
  ];
}
