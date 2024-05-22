import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketGrant {
  // List of permissions to apply for grantee. Valid values are `READ`, `WRITE`, `READ_ACP`, `WRITE_ACP`, `FULL_CONTROL`.
  permissions?: Array<string>;

  // Type of grantee to apply for. Valid values are `CanonicalUser` and `Group`. `AmazonCustomerByEmail` is not supported.
  type?: string;

  // Uri address to grant for. Used only when `type` is `Group`.
  uri?: string;

  // Canonical user id to grant for. Used only when `type` is `CanonicalUser`.
  id?: string;
}

export function s3_BucketGrant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "permissions",
      "List of permissions to apply for grantee. Valid values are `READ`, `WRITE`, `READ_ACP`, `WRITE_ACP`, `FULL_CONTROL`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of grantee to apply for. Valid values are `CanonicalUser` and `Group`. `AmazonCustomerByEmail` is not supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "Uri address to grant for. Used only when `type` is `Group`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Canonical user id to grant for. Used only when `type` is `CanonicalUser`.",
      [],
      false,
      false,
    ),
  ];
}
