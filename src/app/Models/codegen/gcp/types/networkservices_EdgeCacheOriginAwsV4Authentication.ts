import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkservices_EdgeCacheOriginAwsV4Authentication {
  // The name of the AWS region that your origin is in.
  originRegion?: string;

  /*
The Secret Manager secret version of the secret access key used by your origin.
This is the resource name of the secret version in the format `projects/-/secrets/-/versions/-` where the `-` values are replaced by the project, secret, and version you require.
*/
  secretAccessKeyVersion?: string;

  // The access key ID your origin uses to identify the key.
  accessKeyId?: string;
}

export function networkservices_EdgeCacheOriginAwsV4Authentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessKeyId",
      "The access key ID your origin uses to identify the key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "originRegion",
      "The name of the AWS region that your origin is in.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretAccessKeyVersion",
      "The Secret Manager secret version of the secret access key used by your origin.\nThis is the resource name of the secret version in the format `projects/*/secrets/*/versions/*` where the `*` values are replaced by the project, secret, and version you require.",
      () => [],
      true,
      false,
    ),
  ];
}
