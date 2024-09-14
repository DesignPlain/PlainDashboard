import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface imagebuilder_getImageImageTestsConfiguration {
  // Whether image tests are enabled.
  imageTestsEnabled?: boolean;

  // Number of minutes before image tests time out.
  timeoutMinutes?: number;
}

export function imagebuilder_getImageImageTestsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "imageTestsEnabled",
      "Whether image tests are enabled.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutMinutes",
      "Number of minutes before image tests time out.",
      () => [],
      true,
      false,
    ),
  ];
}
