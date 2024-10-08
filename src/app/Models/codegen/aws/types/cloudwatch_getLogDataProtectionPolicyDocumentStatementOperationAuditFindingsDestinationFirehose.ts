import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose {
  // Name of the Kinesis Firehose Delivery Stream to send findings to.
  deliveryStream?: string;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatementOperationAuditFindingsDestinationFirehose_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'deliveryStream',
      'Name of the Kinesis Firehose Delivery Stream to send findings to.',
      () => [],
      true,
      false,
    ),
  ];
}
