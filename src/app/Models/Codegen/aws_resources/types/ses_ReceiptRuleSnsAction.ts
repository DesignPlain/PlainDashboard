import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ses_ReceiptRuleSnsAction {
  // The encoding to use for the email within the Amazon SNS notification. Default value is `UTF-8`.
  encoding?: string;

  // The position of the action in the receipt rule
  position?: number;

  // The ARN of an SNS topic to notify
  topicArn?: string;
}

export function ses_ReceiptRuleSnsAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "encoding",
      "The encoding to use for the email within the Amazon SNS notification. Default value is `UTF-8`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "position",
      "The position of the action in the receipt rule",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topicArn",
      "The ARN of an SNS topic to notify",
      [],
      true,
      false,
    ),
  ];
}
