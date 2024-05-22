import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DefaultSupportedIdpConfigArgs {
  // If this IDP allows the user to sign in
  enabled?: boolean;

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
  idpId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // OAuth client ID
  clientId?: string;

  /*
OAuth client secret


- - -
*/
  clientSecret?: string;
}
export class DefaultSupportedIdpConfig extends Resource {
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
  public idpId?: string;

  // The name of the DefaultSupportedIdpConfig resource
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // OAuth client ID
  public clientId?: string;

  /*
OAuth client secret


- - -
*/
  public clientSecret?: string;

  // If this IDP allows the user to sign in
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "If this IDP allows the user to sign in",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "idpId",
        "ID of the IDP. Possible values include:\n* `apple.com`\n* `facebook.com`\n* `gc.apple.com`\n* `github.com`\n* `google.com`\n* `linkedin.com`\n* `microsoft.com`\n* `playgames.google.com`\n* `twitter.com`\n* `yahoo.com`",
        [],
        true,
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
        "clientId",
        "OAuth client ID",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientSecret",
        "OAuth client secret\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
