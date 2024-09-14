import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser,
  databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser_GetTypes,
} from "./databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser";
import {
  databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings,
  databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings_GetTypes,
} from "./databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings";

export interface databasemigrationservice_ConnectionProfileAlloydbSettings {
  /*
Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.
*/
  vpcNetwork?: string;

  /*
Required. Input only. Initial user to setup during cluster creation.
Structure is documented below.
*/
  initialUser?: databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser;

  // Labels for the AlloyDB cluster created by DMS.
  labels?: Map<string, string>;

  /*
Settings for the cluster's primary instance
Structure is documented below.
*/
  primaryInstanceSettings?: databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings;
}

export function databasemigrationservice_ConnectionProfileAlloydbSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcNetwork",
      "Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.\nIt is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "initialUser",
      "Required. Input only. Initial user to setup during cluster creation.\nStructure is documented below.",
      () =>
        databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "labels",
      "Labels for the AlloyDB cluster created by DMS.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "primaryInstanceSettings",
      "Settings for the cluster's primary instance\nStructure is documented below.",
      () =>
        databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
