import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface WorkspaceSamlConfigurationArgs {
  // The login assertion.
  loginAssertion?: string;

  // The login validity duration.
  loginValidityDuration?: number;

  // The org assertion.
  orgAssertion?: string;

  // The role assertion.
  roleAssertion?: string;

  /*
The workspace id.

The following arguments are optional:
*/
  workspaceId?: string;

  // The name assertion.
  nameAssertion?: string;

  // The admin role values.
  adminRoleValues?: Array<string>;

  // The allowed organizations.
  allowedOrganizations?: Array<string>;

  // The editor role values.
  editorRoleValues?: Array<string>;

  // The email assertion.
  emailAssertion?: string;

  // The groups assertion.
  groupsAssertion?: string;

  // The IDP Metadata URL. Note that either `idp_metadata_url` or `idp_metadata_xml` (but not both) must be specified.
  idpMetadataUrl?: string;

  // The IDP Metadata XML. Note that either `idp_metadata_url` or `idp_metadata_xml` (but not both) must be specified.
  idpMetadataXml?: string;
}
export class WorkspaceSamlConfiguration extends DS_Resource {
  // The login assertion.
  public loginAssertion?: string;

  /*
The workspace id.

The following arguments are optional:
*/
  public workspaceId?: string;

  // The admin role values.
  public adminRoleValues?: Array<string>;

  // The allowed organizations.
  public allowedOrganizations?: Array<string>;

  // The role assertion.
  public roleAssertion?: string;

  // The status of the SAML configuration.
  public status?: string;

  // The email assertion.
  public emailAssertion?: string;

  // The name assertion.
  public nameAssertion?: string;

  // The org assertion.
  public orgAssertion?: string;

  // The login validity duration.
  public loginValidityDuration?: number;

  // The editor role values.
  public editorRoleValues?: Array<string>;

  // The groups assertion.
  public groupsAssertion?: string;

  // The IDP Metadata URL. Note that either `idp_metadata_url` or `idp_metadata_xml` (but not both) must be specified.
  public idpMetadataUrl?: string;

  // The IDP Metadata XML. Note that either `idp_metadata_url` or `idp_metadata_xml` (but not both) must be specified.
  public idpMetadataXml?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'idpMetadataXml',
        'The IDP Metadata XML. Note that either `idp_metadata_url` or `idp_metadata_xml` (but not both) must be specified.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'loginValidityDuration',
        'The login validity duration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'orgAssertion',
        'The org assertion.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'workspaceId',
        'The workspace id.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'editorRoleValues',
        'The editor role values.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'groupsAssertion',
        'The groups assertion.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'idpMetadataUrl',
        'The IDP Metadata URL. Note that either `idp_metadata_url` or `idp_metadata_xml` (but not both) must be specified.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'loginAssertion',
        'The login assertion.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleAssertion',
        'The role assertion.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'nameAssertion',
        'The name assertion.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'adminRoleValues',
        'The admin role values.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'allowedOrganizations',
        'The allowed organizations.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'emailAssertion',
        'The email assertion.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
