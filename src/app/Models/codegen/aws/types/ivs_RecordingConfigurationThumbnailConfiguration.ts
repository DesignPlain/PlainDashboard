import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ivs_RecordingConfigurationThumbnailConfiguration {
  // Thumbnail recording mode. Valid values: `DISABLED`, `INTERVAL`.
  recordingMode?: string;

  // The targeted thumbnail-generation interval in seconds.
  targetIntervalSeconds?: number;
}

export function ivs_RecordingConfigurationThumbnailConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'recordingMode',
      'Thumbnail recording mode. Valid values: `DISABLED`, `INTERVAL`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'targetIntervalSeconds',
      'The targeted thumbnail-generation interval in seconds.',
      () => [],
      false,
      false,
    ),
  ];
}
