import { ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig } from "./ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig";

export interface ConnectionProfileAlloydbSettingsPrimaryInstanceSettings {
  /*
(Output)
Output only. The private IP address for the Instance. This is the connection endpoint for an end-user application.
*/
  PrivateIp?: string;

  // Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.
  DatabaseFlags?: Map<string, string>;

  // The database username.
  Id?: string;

  // Labels for the AlloyDB primary instance created by DMS.
  Labels?: Map<string, string>;

  /*
Configuration for the machines that host the underlying database engine.
Structure is documented below.
*/
  MachineConfig?: ConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig;
}
