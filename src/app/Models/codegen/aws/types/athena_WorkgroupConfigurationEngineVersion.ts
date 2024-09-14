import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface athena_WorkgroupConfigurationEngineVersion {
  // The engine version on which the query runs. If `selected_engine_version` is set to `AUTO`, the effective engine version is chosen by Athena.
  effectiveEngineVersion?: string;

  // Requested engine version. Defaults to `AUTO`.
  selectedEngineVersion?: string;
}

export function athena_WorkgroupConfigurationEngineVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "effectiveEngineVersion",
      "The engine version on which the query runs. If `selected_engine_version` is set to `AUTO`, the effective engine version is chosen by Athena.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "selectedEngineVersion",
      "Requested engine version. Defaults to `AUTO`.",
      () => [],
      false,
      false,
    ),
  ];
}
