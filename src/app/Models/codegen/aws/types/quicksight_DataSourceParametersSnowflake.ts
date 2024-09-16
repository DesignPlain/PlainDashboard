import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSourceParametersSnowflake {
  // The database to which to connect.
  database?: string;

  // The host to which to connect.
  host?: string;

  // The warehouse to which to connect.
  warehouse?: string;
}

export function quicksight_DataSourceParametersSnowflake_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'database',
      'The database to which to connect.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'host',
      'The host to which to connect.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'warehouse',
      'The warehouse to which to connect.',
      () => [],
      true,
      false,
    ),
  ];
}
