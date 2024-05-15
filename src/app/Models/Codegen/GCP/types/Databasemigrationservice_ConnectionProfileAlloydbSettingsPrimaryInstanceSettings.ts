import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig,
  Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig";

export interface Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings {
  // The database username.
  Id?: string;

  // Labels for the AlloyDB primary instance created by DMS.
  Labels?: Map<string, string>;

  /*
Configuration for the machines that host the underlying database engine.
Structure is documented below.
*/
  MachineConfig?: Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig;

  /*
(Output)
Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application.
*/
  PrivateIp?: string;

  // Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.
  DatabaseFlags?: Map<string, string>;
}

export function Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "DatabaseFlags",
      "Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "The database username.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "Labels for the AlloyDB primary instance created by DMS.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MachineConfig",
      "Configuration for the machines that host the underlying database engine.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateIp",
      "(Output)\nOutput only. The private IP address for the Instance. This is the connection endpoint for an end-user application.",
      [],
      false,
      false,
    ),
  ];
}
