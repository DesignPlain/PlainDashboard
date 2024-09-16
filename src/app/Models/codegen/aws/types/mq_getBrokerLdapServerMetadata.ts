import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mq_getBrokerLdapServerMetadata {
  //
  roleName?: string;

  //
  roleSearchMatching?: string;

  //
  roleSearchSubtree?: boolean;

  //
  userSearchSubtree?: boolean;

  //
  hosts?: Array<string>;

  //
  roleBase?: string;

  //
  serviceAccountPassword?: string;

  //
  serviceAccountUsername?: string;

  //
  userBase?: string;

  //
  userRoleName?: string;

  //
  userSearchMatching?: string;
}

export function mq_getBrokerLdapServerMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'userSearchSubtree',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'hosts',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccountPassword',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'userBase', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'userRoleName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'roleName', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      'roleSearchSubtree',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serviceAccountUsername',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userSearchMatching',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleSearchMatching',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'roleBase', '', () => [], true, false),
  ];
}
