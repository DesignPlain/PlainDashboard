import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bigquery_JobStatusError {
  // The geographic location of the job. The default value is US.
  location?: string;

  // A human-readable description of the error.
  message?: string;

  // A short error code that summarizes the error.
  reason?: string;
}

export function bigquery_JobStatusError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'reason',
      'A short error code that summarizes the error.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'The geographic location of the job. The default value is US.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'message',
      'A human-readable description of the error.',
      () => [],
      false,
      false,
    ),
  ];
}
