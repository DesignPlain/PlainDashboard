import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vpcaccess_ConnectorSubnet {
  /*
Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"
*/
  name?: string;

  // Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.
  projectId?: string;
}

export function vpcaccess_ConnectorSubnet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      'Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is\nhttps://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.",
      [],
      false,
      true,
    ),
  ];
}
