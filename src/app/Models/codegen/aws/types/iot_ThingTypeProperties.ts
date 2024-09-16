import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_ThingTypeProperties {
  // The description of the thing type.
  description?: string;

  // A list of searchable thing attribute names.
  searchableAttributes?: Array<string>;
}

export function iot_ThingTypeProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'description',
      'The description of the thing type.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'searchableAttributes',
      'A list of searchable thing attribute names.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
