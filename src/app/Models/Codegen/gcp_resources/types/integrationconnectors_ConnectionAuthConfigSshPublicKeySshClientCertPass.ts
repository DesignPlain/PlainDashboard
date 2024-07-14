import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass {
  /*
The resource name of the secret version in the format,
format as: projects/-/secrets/-/versions/-.

<a name="nested_oauth2_auth_code_flow"></a>The `oauth2_auth_code_flow` block supports:
*/
  secretVersion?: string;
}

export function integrationconnectors_ConnectionAuthConfigSshPublicKeySshClientCertPass_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretVersion",
      'The resource name of the secret version in the format,\nformat as: projects/*/secrets/*/versions/*.\n\n<a name="nested_oauth2_auth_code_flow"></a>The `oauth2_auth_code_flow` block supports:',
      [],
      true,
      false,
    ),
  ];
}
