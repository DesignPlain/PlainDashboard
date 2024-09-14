import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork,
  databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork_GetTypes,
} from "./databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork";

export interface databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig {
  /*
The list of external networks that are allowed to connect to the instance using the IP.
Structure is documented below.
*/
  authorizedNetworks?: Array<databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork>;

  // Whether the instance should be assigned an IPv4 address or not.
  enableIpv4?: boolean;

  /*
The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default.
This setting can be updated, but it cannot be removed after it is set.
*/
  privateNetwork?: string;

  // Whether SSL connections over IP should be enforced or not.
  requireSsl?: boolean;
}

export function databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "requireSsl",
      "Whether SSL connections over IP should be enforced or not.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "authorizedNetworks",
      "The list of external networks that are allowed to connect to the instance using the IP.\nStructure is documented below.",
      () =>
        databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableIpv4",
      "Whether the instance should be assigned an IPv4 address or not.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "privateNetwork",
      "The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default.\nThis setting can be updated, but it cannot be removed after it is set.",
      () => [],
      false,
      false,
    ),
  ];
}
