import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface workbench_InstanceGceSetupServiceAccount {
  // Optional. Email address of the service account.
  email?: string;

  /*
(Output)
Output only. The list of scopes to be made available for this
service account. Set by the CLH to https://www.googleapis.com/auth/cloud-platform
*/
  scopes?: Array<string>;
}

export function workbench_InstanceGceSetupServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "email",
      "Optional. Email address of the service account.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scopes",
      "(Output)\nOutput only. The list of scopes to be made available for this\nservice account. Set by the CLH to https://www.googleapis.com/auth/cloud-platform",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
