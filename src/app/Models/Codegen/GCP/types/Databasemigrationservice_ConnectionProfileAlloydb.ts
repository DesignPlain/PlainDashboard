import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileAlloydbSettings,
  Databasemigrationservice_ConnectionProfileAlloydbSettings_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileAlloydbSettings";

export interface Databasemigrationservice_ConnectionProfileAlloydb {
  // Required. The AlloyDB cluster ID that this connection profile is associated with.
  ClusterId?: string;

  /*
Immutable. Metadata used to create the destination AlloyDB cluster.
Structure is documented below.
*/
  Settings?: Databasemigrationservice_ConnectionProfileAlloydbSettings;
}

export function Databasemigrationservice_ConnectionProfileAlloydb_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClusterId",
      "Required. The AlloyDB cluster ID that this connection profile is associated with.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Settings",
      "Immutable. Metadata used to create the destination AlloyDB cluster.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileAlloydbSettings_GetTypes(),
      false,
      true,
    ),
  ];
}
