import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_getImageImageTestsConfiguration {
  // Number of minutes before image tests time out.
  timeoutMinutes?: number;

  // Whether image tests are enabled.
  imageTestsEnabled?: boolean;
}

export function imagebuilder_getImageImageTestsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "timeoutMinutes",
      "Number of minutes before image tests time out.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "imageTestsEnabled",
      "Whether image tests are enabled.",
      [],
      true,
      false,
    ),
  ];
}
