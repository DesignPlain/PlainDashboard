import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface TenantArgs {
  // Whether to allow email/password user authentication.
  allowPasswordSignup?: boolean;

  /*
Whether authentication is disabled for the tenant. If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.
*/
  disableAuth?: boolean;

  /*
Human friendly display name of the tenant.


- - -
*/
  displayName?: string;

  // Whether to enable email link user authentication.
  enableEmailLinkSignin?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Tenant extends DS_Resource {
  // Whether to allow email/password user authentication.
  public allowPasswordSignup?: boolean;

  /*
Whether authentication is disabled for the tenant. If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.
*/
  public disableAuth?: boolean;

  /*
Human friendly display name of the tenant.


- - -
*/
  public displayName?: string;

  // Whether to enable email link user authentication.
  public enableEmailLinkSignin?: boolean;

  // The name of the tenant that is generated by the server
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'allowPasswordSignup',
        'Whether to allow email/password user authentication.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'disableAuth',
        'Whether authentication is disabled for the tenant. If true, the users under\nthe disabled tenant are not allowed to sign-in. Admins of the disabled tenant\nare not able to manage its users.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'Human friendly display name of the tenant.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableEmailLinkSignin',
        'Whether to enable email link user authentication.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
