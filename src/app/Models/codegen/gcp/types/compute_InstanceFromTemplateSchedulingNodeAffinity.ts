import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_InstanceFromTemplateSchedulingNodeAffinity {
  //
  key?: string;

  //
  operator?: string;

  //
  values?: Array<string>;
}

export function compute_InstanceFromTemplateSchedulingNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'key', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'operator', '', () => [], true, false),
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
