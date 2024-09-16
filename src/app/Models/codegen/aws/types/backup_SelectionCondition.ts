import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  backup_SelectionConditionStringLike,
  backup_SelectionConditionStringLike_GetTypes,
} from './backup_SelectionConditionStringLike';
import {
  backup_SelectionConditionStringNotEqual,
  backup_SelectionConditionStringNotEqual_GetTypes,
} from './backup_SelectionConditionStringNotEqual';
import {
  backup_SelectionConditionStringNotLike,
  backup_SelectionConditionStringNotLike_GetTypes,
} from './backup_SelectionConditionStringNotLike';
import {
  backup_SelectionConditionStringEqual,
  backup_SelectionConditionStringEqual_GetTypes,
} from './backup_SelectionConditionStringEqual';

export interface backup_SelectionCondition {
  //
  stringNotLikes?: Array<backup_SelectionConditionStringNotLike>;

  //
  stringEquals?: Array<backup_SelectionConditionStringEqual>;

  //
  stringLikes?: Array<backup_SelectionConditionStringLike>;

  //
  stringNotEquals?: Array<backup_SelectionConditionStringNotEqual>;
}

export function backup_SelectionCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'stringLikes',
      '',
      () => backup_SelectionConditionStringLike_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'stringNotEquals',
      '',
      () => backup_SelectionConditionStringNotEqual_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'stringNotLikes',
      '',
      () => backup_SelectionConditionStringNotLike_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'stringEquals',
      '',
      () => backup_SelectionConditionStringEqual_GetTypes(),
      false,
      true,
    ),
  ];
}
