import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigquery_JobStatusError {
  // A short error code that summarizes the error.
  reason?: string;

  // The geographic location of the job. The default value is US.
  location?: string;

  // A human-readable description of the error.
  message?: string;
}

export function bigquery_JobStatusError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "location",
      "The geographic location of the job. The default value is US.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "A human-readable description of the error.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "reason",
      "A short error code that summarizes the error.",
      [],
      false,
      false,
    ),
  ];
}
