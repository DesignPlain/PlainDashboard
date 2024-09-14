import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cfg_RecorderRecordingModeRecordingModeOverride,
  cfg_RecorderRecordingModeRecordingModeOverride_GetTypes,
} from "./cfg_RecorderRecordingModeRecordingModeOverride";

export interface cfg_RecorderRecordingMode {
  // Default reecording frequency. `CONTINUOUS` or `DAILY`.
  recordingFrequency?: string;

  // Recording mode overrides. Detailed below.
  recordingModeOverride?: cfg_RecorderRecordingModeRecordingModeOverride;
}

export function cfg_RecorderRecordingMode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recordingFrequency",
      "Default reecording frequency. `CONTINUOUS` or `DAILY`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "recordingModeOverride",
      "Recording mode overrides. Detailed below.",
      () => cfg_RecorderRecordingModeRecordingModeOverride_GetTypes(),
      false,
      false,
    ),
  ];
}
