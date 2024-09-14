import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_ObjectCopyGrant {
  // URI of the grantee group. Used only when `type` is `Group`.
  uri?: string;

  // Email address of the grantee. Used only when `type` is `AmazonCustomerByEmail`.
  email?: string;

  // Canonical user ID of the grantee. Used only when `type` is `CanonicalUser`.
  id?: string;

  // List of permissions to grant to grantee. Valid values are `READ`, `READ_ACP`, `WRITE_ACP`, `FULL_CONTROL`.
  permissions?: Array<string>;

  /*
Type of grantee. Valid values are `CanonicalUser`, `Group`, and `AmazonCustomerByEmail`.

This configuration block has the following optional arguments (one of the three is required):
*/
  type?: string;
}

export function s3_ObjectCopyGrant_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "uri",
      "URI of the grantee group. Used only when `type` is `Group`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "email",
      "Email address of the grantee. Used only when `type` is `AmazonCustomerByEmail`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Canonical user ID of the grantee. Used only when `type` is `CanonicalUser`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "permissions",
      "List of permissions to grant to grantee. Valid values are `READ`, `READ_ACP`, `WRITE_ACP`, `FULL_CONTROL`.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of grantee. Valid values are `CanonicalUser`, `Group`, and `AmazonCustomerByEmail`.\n\nThis configuration block has the following optional arguments (one of the three is required):",
      () => [],
      true,
      false,
    ),
  ];
}
