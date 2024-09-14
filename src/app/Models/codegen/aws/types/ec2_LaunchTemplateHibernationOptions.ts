import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_LaunchTemplateHibernationOptions {
  // If set to `true`, the launched EC2 instance will hibernation enabled.
  configured?: boolean;
}

export function ec2_LaunchTemplateHibernationOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "configured",
      "If set to `true`, the launched EC2 instance will hibernation enabled.",
      () => [],
      true,
      false,
    ),
  ];
}
