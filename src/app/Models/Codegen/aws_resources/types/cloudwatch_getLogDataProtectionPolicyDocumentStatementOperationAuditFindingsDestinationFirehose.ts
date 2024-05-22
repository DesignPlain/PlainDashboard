import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose {
  // Name of the Kinesis Firehose Delivery Stream to send findings to.
  deliveryStream?: string;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deliveryStream",
      "Name of the Kinesis Firehose Delivery Stream to send findings to.",
      [],
      true,
      false,
    ),
  ];
}
