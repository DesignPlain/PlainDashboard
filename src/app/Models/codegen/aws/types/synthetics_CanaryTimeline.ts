import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface synthetics_CanaryTimeline {
  // Date and time the canary was created.
  created?: string;

  // Date and time the canary was most recently modified.
  lastModified?: string;

  // Date and time that the canary's most recent run started.
  lastStarted?: string;

  // Date and time that the canary's most recent run ended.
  lastStopped?: string;
}

export function synthetics_CanaryTimeline_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'lastStarted',
      "Date and time that the canary's most recent run started.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lastStopped',
      "Date and time that the canary's most recent run ended.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'created',
      'Date and time the canary was created.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lastModified',
      'Date and time the canary was most recently modified.',
      () => [],
      false,
      false,
    ),
  ];
}
