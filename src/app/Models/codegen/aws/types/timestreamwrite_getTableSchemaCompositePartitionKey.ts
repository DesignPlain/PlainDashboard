import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface timestreamwrite_getTableSchemaCompositePartitionKey {
  //
  enforcementInRecord?: string;

  // Name of the Timestream table.
  name?: string;

  // Type of partition key.
  type?: string;
}

export function timestreamwrite_getTableSchemaCompositePartitionKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of partition key.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'enforcementInRecord',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the Timestream table.',
      () => [],
      true,
      false,
    ),
  ];
}
