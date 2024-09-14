import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification {
  // The launch template version number, `$Latest`, or `$Default.`
  version?: string;

  // The ID of the launch template.
  launchTemplateId?: string;

  // The name of the launch template.
  launchTemplateName?: string;
}

export function ec2_FleetLaunchTemplateConfigLaunchTemplateSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "version",
      "The launch template version number, `$Latest`, or `$Default.`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateId",
      "The ID of the launch template.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "launchTemplateName",
      "The name of the launch template.",
      () => [],
      false,
      false,
    ),
  ];
}
