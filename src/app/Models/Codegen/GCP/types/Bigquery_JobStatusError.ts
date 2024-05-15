import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_JobStatusError {
  // The geographic location of the job. The default value is US.
  Location?: string;

  // A human-readable description of the error.
  Message?: string;

  // A short error code that summarizes the error.
  Reason?: string;
}

export function Bigquery_JobStatusError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The geographic location of the job. The default value is US.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Message",
      "A human-readable description of the error.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Reason",
      "A short error code that summarizes the error.",
      [],
      false,
      false,
    ),
  ];
}
