import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface databasemigrationservice_ConnectionProfileOraclePrivateConnectivity {
  // Required. The resource name (URI) of the private connection.
  privateConnection?: string;
}

export function databasemigrationservice_ConnectionProfileOraclePrivateConnectivity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'privateConnection',
      'Required. The resource name (URI) of the private connection.',
      () => [],
      true,
      false,
    ),
  ];
}
