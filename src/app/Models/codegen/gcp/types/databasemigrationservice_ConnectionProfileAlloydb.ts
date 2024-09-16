import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  databasemigrationservice_ConnectionProfileAlloydbSettings,
  databasemigrationservice_ConnectionProfileAlloydbSettings_GetTypes,
} from './databasemigrationservice_ConnectionProfileAlloydbSettings';

export interface databasemigrationservice_ConnectionProfileAlloydb {
  /*
Immutable. Metadata used to create the destination AlloyDB cluster.
Structure is documented below.
*/
  settings?: databasemigrationservice_ConnectionProfileAlloydbSettings;

  // Required. The AlloyDB cluster ID that this connection profile is associated with.
  clusterId?: string;
}

export function databasemigrationservice_ConnectionProfileAlloydb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'settings',
      'Immutable. Metadata used to create the destination AlloyDB cluster.\nStructure is documented below.',
      () =>
        databasemigrationservice_ConnectionProfileAlloydbSettings_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'clusterId',
      'Required. The AlloyDB cluster ID that this connection profile is associated with.',
      () => [],
      true,
      false,
    ),
  ];
}
