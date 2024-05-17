import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TenantDefaultSupportedIdpConfigArgs {
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

  // The name of the tenant where this DefaultSupportedIdpConfig resource exists
  Tenant?: string;

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
export class TenantDefaultSupportedIdpConfig extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The name of the tenant where this DefaultSupportedIdpConfig resource exists
  public Tenant?: string;

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

  // The name of the default supported IDP config resource
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ClientId",
        "OAuth client ID",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ClientSecret",
        "OAuth client secret\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Enabled",
        "If this IDP allows the user to sign in",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "IdpId",
        "ID of the IDP. Possible values include:\n* `apple.com`\n* `facebook.com`\n* `gc.apple.com`\n* `github.com`\n* `google.com`\n* `linkedin.com`\n* `microsoft.com`\n* `playgames.google.com`\n* `twitter.com`\n* `yahoo.com`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Tenant",
        "The name of the tenant where this DefaultSupportedIdpConfig resource exists",
        [],
        true,
        true,
      ),
    ];
  }
}
