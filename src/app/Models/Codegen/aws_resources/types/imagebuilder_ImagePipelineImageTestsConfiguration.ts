import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface imagebuilder_ImagePipelineImageTestsConfiguration {
  // Whether image tests are enabled. Defaults to `true`.
  imageTestsEnabled?: boolean;

  // Number of minutes before image tests time out. Valid values are between `60` and `1440`. Defaults to `720`.
  timeoutMinutes?: number;
}

export function imagebuilder_ImagePipelineImageTestsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "imageTestsEnabled",
      "Whether image tests are enabled. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutMinutes",
      "Number of minutes before image tests time out. Valid values are between `60` and `1440`. Defaults to `720`.",
      [],
      false,
      false,
    ),
  ];
}
