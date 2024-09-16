import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface memcache_InstanceMemcacheParameters {
  /*
(Output)
This is a unique ID associated with this set of parameters.
*/
  id?: string;

  // User-defined set of parameters to use in the memcache process.
  params?: Map<string, string>;
}

export function memcache_InstanceMemcacheParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      '(Output)\nThis is a unique ID associated with this set of parameters.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'params',
      'User-defined set of parameters to use in the memcache process.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
