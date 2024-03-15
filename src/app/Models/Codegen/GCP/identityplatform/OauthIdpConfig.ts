import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OauthIdpConfigArgs {
  // If this config allows users to sign in with the provider.
  Enabled?: boolean;

  // For OIDC Idps, the issuer identifier.
  Issuer?: string;

  // The name of the OauthIdpConfig. Must start with `oidc.`.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The client id of an OAuth client.


- - -
*/
  ClientId?: string;

  // The client secret of the OAuth client, to enable OIDC code flow.
  ClientSecret?: string;

  // Human friendly display name.
  DisplayName?: string;
}
export class OauthIdpConfig extends Resource {
  // Human friendly display name.
  public DisplayName?: string;

  // If this config allows users to sign in with the provider.
  public Enabled?: boolean;

  // For OIDC Idps, the issuer identifier.
  public Issuer?: string;

  // The name of the OauthIdpConfig. Must start with `oidc.`.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The client id of an OAuth client.


- - -
*/
  public ClientId?: string;

  // The client secret of the OAuth client, to enable OIDC code flow.
  public ClientSecret?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the OauthIdpConfig. Must start with `oidc.`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientId",
        "The client id of an OAuth client.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientSecret",
        "The client secret of the OAuth client, to enable OIDC code flow.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human friendly display name.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enabled",
        "If this config allows users to sign in with the provider.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Issuer",
        "For OIDC Idps, the issuer identifier.",
      ),
    ];
  }
}