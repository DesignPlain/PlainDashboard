import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface storage_getBucketObjectRetention {
  // The object retention mode. Supported values include: "Unlocked", "Locked".
  mode?: string;

  // Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.
  retainUntilTime?: string;
}

export function storage_getBucketObjectRetention_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mode',
      'The object retention mode. Supported values include: "Unlocked", "Locked".',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'retainUntilTime',
      'Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.',
      () => [],
      true,
      false,
    ),
  ];
}
