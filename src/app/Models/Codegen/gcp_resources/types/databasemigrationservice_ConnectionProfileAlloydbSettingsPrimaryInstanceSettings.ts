import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig,
  databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig_GetTypes,
} from "./databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig";

export interface databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings {
  // Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.
  databaseFlags?: Map<string, string>;

  // The database username.
  id?: string;

  // Labels for the AlloyDB primary instance created by DMS.
  labels?: Map<string, string>;

  /*
Configuration for the machines that host the underlying database engine.
Structure is documented below.
*/
  machineConfig?: databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig;

  /*
(Output)
Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application.
*/
  privateIp?: string;
}

export function databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "databaseFlags",
      "Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The database username.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Labels for the AlloyDB primary instance created by DMS.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "machineConfig",
      "Configuration for the machines that host the underlying database engine.\nStructure is documented below.",
      databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateIp",
      "(Output)\nOutput only. The private IP address for the Instance. This is the connection endpoint for an end-user application.",
      [],
      false,
      false,
    ),
  ];
}
