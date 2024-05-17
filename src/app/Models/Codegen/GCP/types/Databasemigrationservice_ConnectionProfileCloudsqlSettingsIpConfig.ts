import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork,
  Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork_GetTypes,
} from "./Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork";

export interface Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig {
  /*
The list of external networks that are allowed to connect to the instance using the IP.
Structure is documented below.
*/
  AuthorizedNetworks?: Array<Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork>;

  // Whether the instance should be assigned an IPv4 address or not.
  EnableIpv4?: boolean;

  /*
The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default.
This setting can be updated, but it cannot be removed after it is set.
*/
  PrivateNetwork?: string;

  // Whether SSL connections over IP should be enforced or not.
  RequireSsl?: boolean;
}

export function Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AuthorizedNetworks",
      "The list of external networks that are allowed to connect to the instance using the IP.\nStructure is documented below.",
      Databasemigrationservice_ConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetwork_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableIpv4",
      "Whether the instance should be assigned an IPv4 address or not.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PrivateNetwork",
      "The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default.\nThis setting can be updated, but it cannot be removed after it is set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "RequireSsl",
      "Whether SSL connections over IP should be enforced or not.",
      [],
      false,
      false,
    ),
  ];
}
