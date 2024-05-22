import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketAclV2AccessControlPolicyGrantGrantee {
  // Email address of the grantee. See [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for supported AWS regions where this argument can be specified.
  emailAddress?: string;

  // Canonical user ID of the grantee.
  id?: string;

  // Type of grantee. Valid values: `CanonicalUser`, `AmazonCustomerByEmail`, `Group`.
  type?: string;

  // URI of the grantee group.
  uri?: string;

  // Display name of the owner.
  displayName?: string;
}

export function s3_BucketAclV2AccessControlPolicyGrantGrantee_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "Canonical user ID of the grantee.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of grantee. Valid values: `CanonicalUser`, `AmazonCustomerByEmail`, `Group`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uri",
      "URI of the grantee group.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Display name of the owner.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emailAddress",
      "Email address of the grantee. See [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region) for supported AWS regions where this argument can be specified.",
      [],
      false,
      false,
    ),
  ];
}
