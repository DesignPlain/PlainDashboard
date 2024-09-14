import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_InstanceLaunchTemplate {
  // ID of the launch template. Conflicts with `name`.
  id?: string;

  // Name of the launch template. Conflicts with `id`.
  name?: string;

  // Template version. Can be a specific version number, `$Latest` or `$Default`. The default value is `$Default`.
  version?: string;
}

export function ec2_InstanceLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the launch template. Conflicts with `id`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "Template version. Can be a specific version number, `$Latest` or `$Default`. The default value is `$Default`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the launch template. Conflicts with `name`.",
      () => [],
      false,
      true,
    ),
  ];
}
