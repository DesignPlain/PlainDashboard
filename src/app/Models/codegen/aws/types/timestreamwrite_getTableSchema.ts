import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  timestreamwrite_getTableSchemaCompositePartitionKey,
  timestreamwrite_getTableSchemaCompositePartitionKey_GetTypes,
} from './timestreamwrite_getTableSchemaCompositePartitionKey';

export interface timestreamwrite_getTableSchema {
  //
  compositePartitionKeys?: Array<timestreamwrite_getTableSchemaCompositePartitionKey>;
}

export function timestreamwrite_getTableSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'compositePartitionKeys',
      '',
      () => timestreamwrite_getTableSchemaCompositePartitionKey_GetTypes(),
      true,
      false,
    ),
  ];
}
