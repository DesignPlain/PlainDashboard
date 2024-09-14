import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface evidently_LaunchGroup {
  // Specifies the description of the launch group.
  description?: string;

  // Specifies the name of the feature that the launch is using.
  feature?: string;

  // Specifies the name of the lahnch group.
  name?: string;

  // Specifies the feature variation to use for this launch group.
  variation?: string;
}

export function evidently_LaunchGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Specifies the description of the launch group.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "feature",
      "Specifies the name of the feature that the launch is using.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Specifies the name of the lahnch group.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "variation",
      "Specifies the feature variation to use for this launch group.",
      () => [],
      true,
      false,
    ),
  ];
}
