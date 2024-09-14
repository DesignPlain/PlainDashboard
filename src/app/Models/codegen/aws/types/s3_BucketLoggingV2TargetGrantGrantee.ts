import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_BucketLoggingV2TargetGrantGrantee {
  // URI of the grantee group.
  uri?: string;

  //
  displayName?: string;

  // Email address of the grantee. See [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for supported AWS regions where this argument can be specified.
  emailAddress?: string;

  // Canonical user ID of the grantee.
  id?: string;

  // Type of grantee. Valid values: `CanonicalUser`, `AmazonCustomerByEmail`, `Group`.
  type?: string;
}

export function s3_BucketLoggingV2TargetGrantGrantee_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of grantee. Valid values: `CanonicalUser`, `AmazonCustomerByEmail`, `Group`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "URI of the grantee group.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emailAddress",
      "Email address of the grantee. See [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for supported AWS regions where this argument can be specified.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Canonical user ID of the grantee.",
      () => [],
      false,
      false,
    ),
  ];
}
