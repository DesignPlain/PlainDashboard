import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface databasemigrationservice_PrivateConnectionVpcPeeringConfig {
  /*
A free subnet for peering. (CIDR of /29)

- - -
*/
  subnet?: string;

  /*
Fully qualified name of the VPC that Database Migration Service will peer to.
Format: projects/{project}/global/{networks}/{name}
*/
  vpcName?: string;
}

export function databasemigrationservice_PrivateConnectionVpcPeeringConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "subnet",
      "A free subnet for peering. (CIDR of /29)\n\n- - -",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcName",
      "Fully qualified name of the VPC that Database Migration Service will peer to.\nFormat: projects/{project}/global/{networks}/{name}",
      [],
      true,
      true,
    ),
  ];
}
