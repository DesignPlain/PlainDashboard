import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface vpcaccess_getConnectorSubnet {
  /*
Name of the resource.

- - -
*/
  name?: string;

  // Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.
  projectId?: string;
}

export function vpcaccess_getConnectorSubnet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the resource.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
