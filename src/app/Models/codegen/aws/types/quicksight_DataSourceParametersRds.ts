import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface quicksight_DataSourceParametersRds {
  // The database to which to connect.
  database?: string;

  // The instance ID to which to connect.
  instanceId?: string;
}

export function quicksight_DataSourceParametersRds_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'instanceId',
      'The instance ID to which to connect.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'database',
      'The database to which to connect.',
      () => [],
      true,
      false,
    ),
  ];
}
