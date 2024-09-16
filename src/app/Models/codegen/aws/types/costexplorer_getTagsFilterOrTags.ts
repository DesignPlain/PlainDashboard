import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface costexplorer_getTagsFilterOrTags {
  //
  key?: string;

  //
  matchOptions?: Array<string>;

  //
  values?: Array<string>;
}

export function costexplorer_getTagsFilterOrTags_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'key', '', () => [], false, false),
    new DynamicUIProps(
      InputType.Array,
      'matchOptions',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      '',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
