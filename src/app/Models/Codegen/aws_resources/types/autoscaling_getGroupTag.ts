import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface autoscaling_getGroupTag {
  // Key.
  key?: string;

  // Whether the tag is propagated to Amazon EC2 instances launched via this ASG.
  propagateAtLaunch?: boolean;

  // Value.
  value?: string;
}

export function autoscaling_getGroupTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "key", "Key.", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "propagateAtLaunch",
      "Whether the tag is propagated to Amazon EC2 instances launched via this ASG.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "value", "Value.", [], true, false),
  ];
}
