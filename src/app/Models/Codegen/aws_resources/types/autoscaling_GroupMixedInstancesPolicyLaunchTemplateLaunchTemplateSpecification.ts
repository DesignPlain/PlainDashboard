import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  // ID of the launch template. Conflicts with `launch_template_name`.
  launchTemplateId?: string;

  // Name of the launch template. Conflicts with `launch_template_id`.
  launchTemplateName?: string;

  // Template version. Can be version number, `$Latest`, or `$Default`. (Default: `$Default`).
  version?: string;
}

export function autoscaling_GroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "launchTemplateName",
      "Name of the launch template. Conflicts with `launch_template_id`.",
      [],
      false,
      false,
    ),
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
      "launchTemplateId",
      "ID of the launch template. Conflicts with `launch_template_name`.",
      [],
      false,
      false,
    ),
  ];
}
