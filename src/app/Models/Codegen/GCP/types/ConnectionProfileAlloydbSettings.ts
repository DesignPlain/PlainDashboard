import { ConnectionProfileAlloydbSettingsPrimaryInstanceSettings } from "./ConnectionProfileAlloydbSettingsPrimaryInstanceSettings";
import { ConnectionProfileAlloydbSettingsInitialUser } from "./ConnectionProfileAlloydbSettingsInitialUser";

export interface ConnectionProfileAlloydbSettings {
  /*
Required. Input only. Initial user to setup during cluster creation.
Structure is documented below.
*/
  InitialUser?: ConnectionProfileAlloydbSettingsInitialUser;

  // Labels for the AlloyDB cluster created by DMS.
  Labels?: Map<string, string>;

  /*
Settings for the cluster's primary instance
Structure is documented below.
*/
  PrimaryInstanceSettings?: ConnectionProfileAlloydbSettingsPrimaryInstanceSettings;

  /*
Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
It is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.
*/
  VpcNetwork?: string;
}
