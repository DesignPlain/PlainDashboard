import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface autoscaling_GroupLaunchTemplate {
  // Name of the launch template. Conflicts with `id`.
  name?: string;

  // Template version. Can be version number, `$Latest`, or `$Default`. (Default: `$Default`).
  version?: string;

  // ID of the launch template. Conflicts with `name`.
  id?: string;
}

export function autoscaling_GroupLaunchTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "Template version. Can be version number, `$Latest`, or `$Default`. (Default: `$Default`).",
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
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the launch template. Conflicts with `id`.",
      [],
      false,
      false,
    ),
  ];
}
