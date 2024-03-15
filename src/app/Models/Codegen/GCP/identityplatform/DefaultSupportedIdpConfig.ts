import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DefaultSupportedIdpConfigArgs {
  /*
ID of the IDP. Possible values include:
- `apple.com`
- `facebook.com`
- `gc.apple.com`
- `github.com`
- `google.com`
- `linkedin.com`
- `microsoft.com`
- `playgames.google.com`
- `twitter.com`
- `yahoo.com`
*/
  IdpId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // OAuth client ID
  ClientId?: string;

  /*
OAuth client secret


- - -
*/
  ClientSecret?: string;

  // If this IDP allows the user to sign in
  Enabled?: boolean;
}
export class DefaultSupportedIdpConfig extends Resource {
  // OAuth client ID
  public ClientId?: string;

  /*
OAuth client secret


- - -
*/
  public ClientSecret?: string;

  // If this IDP allows the user to sign in
  public Enabled?: boolean;

  /*
ID of the IDP. Possible values include:
- `apple.com`
- `facebook.com`
- `gc.apple.com`
- `github.com`
- `google.com`
- `linkedin.com`
- `microsoft.com`
- `playgames.google.com`
- `twitter.com`
- `yahoo.com`
*/
  public IdpId?: string;

  // The name of the DefaultSupportedIdpConfig resource
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "IdpId",
        "ID of the IDP. Possible values include:\n* `apple.com`\n* `facebook.com`\n* `gc.apple.com`\n* `github.com`\n* `google.com`\n* `linkedin.com`\n* `microsoft.com`\n* `playgames.google.com`\n* `twitter.com`\n* `yahoo.com`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(InputType.String, "ClientId", "OAuth client ID"),
      new DynamicUIProps(
        InputType.String,
        "ClientSecret",
        "OAuth client secret\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enabled",
        "If this IDP allows the user to sign in",
      ),
    ];
  }
}
