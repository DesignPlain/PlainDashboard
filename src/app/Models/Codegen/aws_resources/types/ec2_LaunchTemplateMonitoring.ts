import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_LaunchTemplateMonitoring {
  // If `true`, the launched EC2 instance will have detailed monitoring enabled.
  enabled?: boolean;
}

export function ec2_LaunchTemplateMonitoring_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "If `true`, the launched EC2 instance will have detailed monitoring enabled.",
      [],
      false,
      false,
    ),
  ];
}
