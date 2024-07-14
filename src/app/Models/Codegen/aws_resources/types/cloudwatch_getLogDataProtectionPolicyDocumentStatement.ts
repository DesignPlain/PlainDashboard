import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation,
  cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation_GetTypes,
} from "./cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation";

export interface cloudwatch_getLogDataProtectionPolicyDocumentStatement {
  // Configures the data protection operation applied by this statement.
  operation?: cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation;

  // Name of this statement.
  sid?: string;

  // Set of at least 1 sensitive data identifiers that you want to mask. Read more in [Types of data that you can protect](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/protect-sensitive-log-data-types.html).
  dataIdentifiers?: Array<string>;
}

export function cloudwatch_getLogDataProtectionPolicyDocumentStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "operation",
      "Configures the data protection operation applied by this statement.",
      cloudwatch_getLogDataProtectionPolicyDocumentStatementOperation_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sid",
      "Name of this statement.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataIdentifiers",
      "Set of at least 1 sensitive data identifiers that you want to mask. Read more in [Types of data that you can protect](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/protect-sensitive-log-data-types.html).",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
