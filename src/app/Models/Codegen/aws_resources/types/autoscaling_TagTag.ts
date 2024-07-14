import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface autoscaling_TagTag {
  // Tag name.
  key?: string;

  // Whether to propagate the tags to instances launched by the ASG.
  propagateAtLaunch?: boolean;

  // Tag value.
  value?: string;
}

export function autoscaling_TagTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "key", "Tag name.", [], true, true),
    new DynamicUIProps(
      InputType.Bool,
      "propagateAtLaunch",
      "Whether to propagate the tags to instances launched by the ASG.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Tag value.",
      [],
      true,
      false,
    ),
  ];
}
