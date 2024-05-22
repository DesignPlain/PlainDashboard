import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface auditmanager_AssessmentAssessmentReportsDestination {
  // Destination of the assessment report. This value be in the form `s3://{bucket_name}`.
  destination?: string;

  // Destination type. Currently, `S3` is the only valid value.
  destinationType?: string;
}

export function auditmanager_AssessmentAssessmentReportsDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "destination",
      "Destination of the assessment report. This value be in the form `s3://{bucket_name}`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "destinationType",
      "Destination type. Currently, `S3` is the only valid value.",
      [],
      true,
      false,
    ),
  ];
}
