import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification {
  // The ID of the launch template.
  launchTemplateId?: string;

  // The name of the launch template.
  launchTemplateName?: string;

  // The launch template version number, `$Latest`, or `$Default.`
  version?: string;
}

export function ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "launchTemplateId",
      "The ID of the launch template.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateName",
      "The name of the launch template.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      "The launch template version number, `$Latest`, or `$Default.`",
      [],
      true,
      false,
    ),
  ];
}
