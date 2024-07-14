import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface mq_getBrokerLdapServerMetadata {
  //
  userBase?: string;

  //
  hosts?: Array<string>;

  //
  roleSearchMatching?: string;

  //
  roleSearchSubtree?: boolean;

  //
  serviceAccountPassword?: string;

  //
  serviceAccountUsername?: string;

  //
  roleBase?: string;

  //
  roleName?: string;

  //
  userRoleName?: string;

  //
  userSearchMatching?: string;

  //
  userSearchSubtree?: boolean;
}

export function mq_getBrokerLdapServerMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "userRoleName", "", [], true, false),
    new DynamicUIProps(InputType.String, "userBase", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "hosts",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleSearchMatching",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "roleSearchSubtree",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountUsername",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "roleBase", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountPassword",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "roleName", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "userSearchMatching",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "userSearchSubtree",
      "",
      [],
      true,
      false,
    ),
  ];
}
