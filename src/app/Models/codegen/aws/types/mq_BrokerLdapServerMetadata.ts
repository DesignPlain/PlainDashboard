import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mq_BrokerLdapServerMetadata {
  // Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.
  roleName?: string;

  // Service account password.
  serviceAccountPassword?: string;

  // Service account username.
  serviceAccountUsername?: string;

  // Whether the directory search scope is the entire sub-tree.
  userSearchSubtree?: boolean;

  // Fully qualified name of the directory to search for a user’s groups.
  roleBase?: string;

  // Search criteria for groups.
  roleSearchMatching?: string;

  // Whether the directory search scope is the entire sub-tree.
  roleSearchSubtree?: boolean;

  // Fully qualified name of the directory where you want to search for users.
  userBase?: string;

  // Specifies the name of the LDAP attribute for the user group membership.
  userRoleName?: string;

  // Search criteria for users.
  userSearchMatching?: string;

  // List of a fully qualified domain name of the LDAP server and an optional failover server.
  hosts?: Array<string>;
}

export function mq_BrokerLdapServerMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'userBase',
      'Fully qualified name of the directory where you want to search for users.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'hosts',
      'List of a fully qualified domain name of the LDAP server and an optional failover server.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccountUsername',
      'Service account username.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'userSearchSubtree',
      'Whether the directory search scope is the entire sub-tree.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleBase',
      'Fully qualified name of the directory to search for a user’s groups.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'roleSearchSubtree',
      'Whether the directory search scope is the entire sub-tree.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userRoleName',
      'Specifies the name of the LDAP attribute for the user group membership.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userSearchMatching',
      'Search criteria for users.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleName',
      'Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccountPassword',
      'Service account password.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleSearchMatching',
      'Search criteria for groups.',
      () => [],
      false,
      false,
    ),
  ];
}
