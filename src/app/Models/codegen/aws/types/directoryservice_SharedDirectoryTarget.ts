import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface directoryservice_SharedDirectoryTarget {
  // Identifier of the directory consumer account.
  id?: string;

  // Type of identifier to be used in the `id` field. Valid value is `ACCOUNT`. Default is `ACCOUNT`.
  type?: string;
}

export function directoryservice_SharedDirectoryTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      'Identifier of the directory consumer account.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of identifier to be used in the `id` field. Valid value is `ACCOUNT`. Default is `ACCOUNT`.',
      () => [],
      false,
      false,
    ),
  ];
}
