import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TenantOauthIdpConfigArgs {
  // Human friendly display name.
  displayName?: string;

  // If this config allows users to sign in with the provider.
  enabled?: boolean;

  // For OIDC Idps, the issuer identifier.
  issuer?: string;

  // The name of the OauthIdpConfig. Must start with `oidc.`.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The name of the tenant where this OIDC IDP configuration resource exists
  tenant?: string;

  /*
The client id of an OAuth client.


- - -
*/
  clientId?: string;

  // The client secret of the OAuth client, to enable OIDC code flow.
  clientSecret?: string;
}
export class TenantOauthIdpConfig extends Resource {
  // The name of the OauthIdpConfig. Must start with `oidc.`.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The name of the tenant where this OIDC IDP configuration resource exists
  public tenant?: string;

  /*
The client id of an OAuth client.


- - -
*/
  public clientId?: string;

  // The client secret of the OAuth client, to enable OIDC code flow.
  public clientSecret?: string;

  // Human friendly display name.
  public displayName?: string;

  // If this config allows users to sign in with the provider.
  public enabled?: boolean;

  // For OIDC Idps, the issuer identifier.
  public issuer?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the OauthIdpConfig. Must start with `oidc.`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tenant",
        "The name of the tenant where this OIDC IDP configuration resource exists",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientId",
        "The client id of an OAuth client.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientSecret",
        "The client secret of the OAuth client, to enable OIDC code flow.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Human friendly display name.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "If this config allows users to sign in with the provider.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "issuer",
        "For OIDC Idps, the issuer identifier.",
        [],
        true,
        false,
      ),
    ];
  }
}
