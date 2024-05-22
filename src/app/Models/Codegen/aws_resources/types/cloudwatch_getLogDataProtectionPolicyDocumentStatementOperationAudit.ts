import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination,
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination_GetTypes,
} from "./cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination";

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit {
  // Configures destinations to send audit findings to.
  findingsDestination?: cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "findingsDestination",
      "Configures destinations to send audit findings to.",
      cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
