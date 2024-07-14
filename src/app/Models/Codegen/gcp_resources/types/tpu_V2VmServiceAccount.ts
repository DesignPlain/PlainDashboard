import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface tpu_V2VmServiceAccount {
  // Email address of the service account. If empty, default Compute service account will be used.
  email?: string;

  /*
The list of scopes to be made available for this service account. If empty, access to all
Cloud APIs will be allowed.
*/
  scopes?: Array<string>;
}

export function tpu_V2VmServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "email",
      "Email address of the service account. If empty, default Compute service account will be used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scopes",
      "The list of scopes to be made available for this service account. If empty, access to all\nCloud APIs will be allowed.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
