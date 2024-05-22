import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_getImagePipelineImageTestsConfiguration {
  // Whether image tests are enabled.
  imageTestsEnabled?: boolean;

  // Number of minutes before image tests time out.
  timeoutMinutes?: number;
}

export function imagebuilder_getImagePipelineImageTestsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "imageTestsEnabled",
      "Whether image tests are enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutMinutes",
      "Number of minutes before image tests time out.",
      [],
      true,
      false,
    ),
  ];
}
