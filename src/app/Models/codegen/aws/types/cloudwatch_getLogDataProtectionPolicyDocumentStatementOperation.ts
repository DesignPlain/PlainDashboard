import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify,
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify_GetTypes,
} from "./cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify";
import {
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit,
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit_GetTypes,
} from "./cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit";

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation {
  // Configures the detection of sensitive data.
  audit?: cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit;

  /*
Configures the masking of sensitive data.

> Every policy statement must specify exactly one operation.
*/
  deidentify?: cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "deidentify",
      "Configures the masking of sensitive data.\n\n> Every policy statement must specify exactly one operation.",
      () =>
        cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationDeidentify_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "audit",
      "Configures the detection of sensitive data.",
      () =>
        cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAudit_GetTypes(),
      false,
      false,
    ),
  ];
}
