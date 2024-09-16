import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fsx_getOpenZfsSnapshotFilter {
  // Name of the snapshot.
  name?: string;

  //
  values?: Array<string>;
}

export function fsx_getOpenZfsSnapshotFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the snapshot.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'values',
      '',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
