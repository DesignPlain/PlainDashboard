import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface backup_FrameworkControlInputParameter {
  // The name of a parameter, for example, BackupPlanFrequency.
  name?: string;

  // The value of parameter, for example, hourly.
  value?: string;
}

export function backup_FrameworkControlInputParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of a parameter, for example, BackupPlanFrequency.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of parameter, for example, hourly.",
      () => [],
      false,
      false,
    ),
  ];
}
