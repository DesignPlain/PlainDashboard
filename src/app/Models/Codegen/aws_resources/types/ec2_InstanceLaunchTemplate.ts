import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_InstanceLaunchTemplate {
  // Name of the launch template. Conflicts with `id`.
  name?: string;

  // Template version. Can be a specific version number, `$Latest` or `$Default`. The default value is `$Default`.
  version?: string;

  // ID of the launch template. Conflicts with `name`.
  id?: string;
}

export function ec2_InstanceLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the launch template. Conflicts with `id`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Template version. Can be a specific version number, `$Latest` or `$Default`. The default value is `$Default`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the launch template. Conflicts with `name`.",
      [],
      false,
      true,
    ),
  ];
}
