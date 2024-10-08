import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cleanrooms_CollaborationMember {
  //
  accountId?: string;

  //
  displayName?: string;

  //
  memberAbilities?: Array<string>;

  //
  status?: string;
}

export function cleanrooms_CollaborationMember_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'accountId', '', () => [], true, true),
    new DynamicUIProps(
      InputType.String,
      'displayName',
      '',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'memberAbilities',
      '',
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(InputType.String, 'status', '', () => [], false, false),
  ];
}
