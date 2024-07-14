import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs,
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs_GetTypes,
} from "./cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs";
import {
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose,
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose_GetTypes,
} from "./cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose";
import {
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3,
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3_GetTypes,
} from "./cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3";

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination {
  // Configures CloudWatch Logs as a findings destination.
  cloudwatchLogs?: cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs;

  // Configures Kinesis Firehose as a findings destination.
  firehose?: cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose;

  // Configures S3 as a findings destination.
  s3?: cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "Configures CloudWatch Logs as a findings destination.",
      cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationCloudwatchLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "firehose",
      "Configures Kinesis Firehose as a findings destination.",
      cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3",
      "Configures S3 as a findings destination.",
      cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationS3_GetTypes(),
      false,
      false,
    ),
  ];
}
