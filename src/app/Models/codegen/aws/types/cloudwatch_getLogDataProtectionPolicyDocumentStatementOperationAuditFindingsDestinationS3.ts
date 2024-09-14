import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3 {
  // Name of the S3 Bucket to send findings to.
  bucket?: string;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of the S3 Bucket to send findings to.",
      () => [],
      true,
      false,
    ),
  ];
}
