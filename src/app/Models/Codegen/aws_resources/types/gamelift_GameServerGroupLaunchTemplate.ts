import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gamelift_GameServerGroupLaunchTemplate {
  // A unique identifier for an existing EC2 launch template.
  id?: string;

  // A readable identifier for an existing EC2 launch template.
  name?: string;

  // The version of the EC2 launch template to use. If none is set, the default is the first version created.
  version?: string;
}

export function gamelift_GameServerGroupLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "A unique identifier for an existing EC2 launch template.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A readable identifier for an existing EC2 launch template.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The version of the EC2 launch template to use. If none is set, the default is the first version created.",
      [],
      false,
      true,
    ),
  ];
}
