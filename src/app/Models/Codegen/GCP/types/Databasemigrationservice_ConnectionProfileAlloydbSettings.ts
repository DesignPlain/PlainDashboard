import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser,
  Databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser";
import {
  Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings,
  Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings";

export interface Databasemigrationservice_ConnectionProfileAlloydbSettings {
  /*
Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.
*/
  VpcNetwork?: string;

  /*
Required. Input only. Initial user to setup during cluster creation.
Structure is documented below.
*/
  InitialUser?: Databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser;

  // Labels for the AlloyDB cluster created by DMS.
  Labels?: Map<string, string>;

  /*
Settings for the cluster's primary instance
Structure is documented below.
*/
  PrimaryInstanceSettings?: Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings;
}

export function Databasemigrationservice_ConnectionProfileAlloydbSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "InitialUser",
      "Required. Input only. Initial user to setup during cluster creation.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileAlloydbSettingsInitialUser_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "Labels for the AlloyDB cluster created by DMS.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrimaryInstanceSettings",
      "Settings for the cluster's primary instance\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileAlloydbSettingsPrimaryInstanceSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "VpcNetwork",
      "Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.\nIt is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.",
      [],
      true,
      false,
    ),
  ];
}
