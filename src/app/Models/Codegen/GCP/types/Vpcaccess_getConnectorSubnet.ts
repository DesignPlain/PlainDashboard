import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Vpcaccess_getConnectorSubnet {
  /*
Name of the resource.

- - -
*/
  Name?: string;

  // Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.
  ProjectId?: string;
}

export function Vpcaccess_getConnectorSubnet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the resource.\n\n- - -",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.",
      [],
      true,
      false,
    ),
  ];
}
