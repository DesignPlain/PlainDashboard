import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ProjectDefaultConfigSignInAnonymous {
  /*
Whether anonymous user auth is enabled for the project or not.

<a name="nested_hash_config"></a>The `hash_config` block contains:
*/
  Enabled?: boolean;
}

export function Identityplatform_ProjectDefaultConfigSignInAnonymous_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      'Whether anonymous user auth is enabled for the project or not.\n\n<a name="nested_hash_config"></a>The `hash_config` block contains:',
      [],
      true,
      false,
    ),
  ];
}
