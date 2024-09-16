import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface OauthIdpConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The client id of an OAuth client.


- - -
*/
  clientId?: string;

  // The client secret of the OAuth client, to enable OIDC code flow.
  clientSecret?: string;

  // Human friendly display name.
  displayName?: string;

  // If this config allows users to sign in with the provider.
  enabled?: boolean;

  // For OIDC Idps, the issuer identifier.
  issuer?: string;

  // The name of the OauthIdpConfig. Must start with `oidc.`.
  name?: string;
}
export class OauthIdpConfig extends DS_Resource {
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

  // The name of the OauthIdpConfig. Must start with `oidc.`.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Human friendly display name.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'If this config allows users to sign in with the provider.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'issuer',
        'For OIDC Idps, the issuer identifier.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the OauthIdpConfig. Must start with `oidc.`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clientId',
        'The client id of an OAuth client.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'clientSecret',
        'The client secret of the OAuth client, to enable OIDC code flow.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
