import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface iam_getAccessKeysAccessKey {
  // Access key ID.
  accessKeyId?: string;

  // Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the access key was created.
  createDate?: string;

  // Access key status. Possible values are `Active` and `Inactive`.
  status?: string;
}

export function iam_getAccessKeysAccessKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessKeyId",
      "Access key ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createDate",
      "Date and time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) that the access key was created.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "status",
      "Access key status. Possible values are `Active` and `Inactive`.",
      [],
      true,
      false,
    ),
  ];
}
