import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bigquery_JobLoadTimePartitioning {
  // Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.
  expirationMs?: string;

  /*
If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field.
The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
A wrapper is used here because an empty string is an invalid value.
*/
  field?: string;

  /*
The only type supported is DAY, which will generate one partition per day. Providing an empty string used to cause an error,
but in OnePlatform the field will be treated as unset.
*/
  type?: string;
}

export function bigquery_JobLoadTimePartitioning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'expirationMs',
      'Number of milliseconds for which to keep the storage for a partition. A wrapper is used here because 0 is an invalid value.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'field',
      "If not set, the table is partitioned by pseudo column '_PARTITIONTIME'; if set, the table is partitioned by this field.\nThe field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.\nA wrapper is used here because an empty string is an invalid value.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The only type supported is DAY, which will generate one partition per day. Providing an empty string used to cause an error,\nbut in OnePlatform the field will be treated as unset.',
      () => [],
      true,
      true,
    ),
  ];
}
