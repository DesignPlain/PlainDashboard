import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  databasemigrationservice_ConnectionProfileAlloydbSettings,
  databasemigrationservice_ConnectionProfileAlloydbSettings_GetTypes,
} from "./databasemigrationservice_ConnectionProfileAlloydbSettings";

export interface databasemigrationservice_ConnectionProfileAlloydb {
  // Required. The AlloyDB cluster ID that this connection profile is associated with.
  clusterId?: string;

  /*
Immutable. Metadata used to create the destination AlloyDB cluster.
Structure is documented below.
*/
  settings?: databasemigrationservice_ConnectionProfileAlloydbSettings;
}

export function databasemigrationservice_ConnectionProfileAlloydb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clusterId",
      "Required. The AlloyDB cluster ID that this connection profile is associated with.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "settings",
      "Immutable. Metadata used to create the destination AlloyDB cluster.\nStructure is documented below.",
      databasemigrationservice_ConnectionProfileAlloydbSettings_GetTypes(),
      false,
      true,
    ),
  ];
}
