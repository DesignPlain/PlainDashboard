import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getLaunchTemplateIamInstanceProfile {
  //
  arn?: string;

  // Name of the launch template.
  name?: string;
}

export function ec2_getLaunchTemplateIamInstanceProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "arn", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the launch template.",
      () => [],
      true,
      false,
    ),
  ];
}
