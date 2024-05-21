import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AuthorizedOrgsDescArgs {
  /*
The type of entities that need to use the authorization relationship during
evaluation, such as a device. Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH".
Possible values are: `ASSET_TYPE_DEVICE`, `ASSET_TYPE_CREDENTIAL_STRENGTH`.
*/
  assetType?: string;

  /*
The direction of the authorization relationship between this organization
and the organizations listed in the "orgs" field. The valid values for this
field include the following:
AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the `orgs` field.
AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the `orgs`
field to evaluate the traffic in this organization.
For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource.
Possible values are: `AUTHORIZATION_DIRECTION_TO`, `AUTHORIZATION_DIRECTION_FROM`.
*/
  authorizationDirection?: string;

  /*
A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST".
Possible values are: `AUTHORIZATION_TYPE_TRUST`.
*/
  authorizationType?: string;

  /*
Resource name for the `AuthorizedOrgsDesc`. Format:
`accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`.
The `authorized_orgs_desc` component must begin with a letter, followed by
alphanumeric characters or `_`.
After you create an `AuthorizedOrgsDesc`, you cannot change its `name`.


- - -
*/
  name?: string;

  /*
The list of organization ids in this AuthorizedOrgsDesc.
Format: `organizations/<org_number>`
Example: `organizations/123456`
*/
  orgs?: Array<string>;

  // Required. Resource name for the access policy which owns this `AuthorizedOrgsDesc`.
  parent?: string;
}
export class AuthorizedOrgsDesc extends Resource {
  // Required. Resource name for the access policy which owns this `AuthorizedOrgsDesc`.
  public parent?: string;

  // Time the AuthorizedOrgsDesc was updated in UTC.
  public updateTime?: string;

  /*
The type of entities that need to use the authorization relationship during
evaluation, such as a device. Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH".
Possible values are: `ASSET_TYPE_DEVICE`, `ASSET_TYPE_CREDENTIAL_STRENGTH`.
*/
  public assetType?: string;

  /*
The direction of the authorization relationship between this organization
and the organizations listed in the "orgs" field. The valid values for this
field include the following:
AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the `orgs` field.
AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the `orgs`
field to evaluate the traffic in this organization.
For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource.
Possible values are: `AUTHORIZATION_DIRECTION_TO`, `AUTHORIZATION_DIRECTION_FROM`.
*/
  public authorizationDirection?: string;

  /*
A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST".
Possible values are: `AUTHORIZATION_TYPE_TRUST`.
*/
  public authorizationType?: string;

  // Time the AuthorizedOrgsDesc was created in UTC.
  public createTime?: string;

  /*
Resource name for the `AuthorizedOrgsDesc`. Format:
`accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`.
The `authorized_orgs_desc` component must begin with a letter, followed by
alphanumeric characters or `_`.
After you create an `AuthorizedOrgsDesc`, you cannot change its `name`.


- - -
*/
  public name?: string;

  /*
The list of organization ids in this AuthorizedOrgsDesc.
Format: `organizations/<org_number>`
Example: `organizations/123456`
*/
  public orgs?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "authorizationDirection",
        'The direction of the authorization relationship between this organization\nand the organizations listed in the "orgs" field. The valid values for this\nfield include the following:\nAUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic\nin the organizations listed in the `orgs` field.\nAUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the `orgs`\nfield to evaluate the traffic in this organization.\nFor the authorization relationship to take effect, all of the organizations\nmust authorize and specify the appropriate relationship direction. For\nexample, if organization A authorized organization B and C to evaluate its\ntraffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization\ndirection, organizations B and C must specify\n"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their\n"AuthorizedOrgsDesc" resource.\nPossible values are: `AUTHORIZATION_DIRECTION_TO`, `AUTHORIZATION_DIRECTION_FROM`.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizationType",
        'A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST".\nPossible values are: `AUTHORIZATION_TYPE_TRUST`.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Resource name for the `AuthorizedOrgsDesc`. Format:\n`accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}`.\nThe `authorized_orgs_desc` component must begin with a letter, followed by\nalphanumeric characters or `_`.\nAfter you create an `AuthorizedOrgsDesc`, you cannot change its `name`.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "orgs",
        "The list of organization ids in this AuthorizedOrgsDesc.\nFormat: `organizations/<org_number>`\nExample: `organizations/123456`",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "Required. Resource name for the access policy which owns this `AuthorizedOrgsDesc`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "assetType",
        'The type of entities that need to use the authorization relationship during\nevaluation, such as a device. Valid values are "ASSET_TYPE_DEVICE" and\n"ASSET_TYPE_CREDENTIAL_STRENGTH".\nPossible values are: `ASSET_TYPE_DEVICE`, `ASSET_TYPE_CREDENTIAL_STRENGTH`.',
        [],
        false,
        true,
      ),
    ];
  }
}
