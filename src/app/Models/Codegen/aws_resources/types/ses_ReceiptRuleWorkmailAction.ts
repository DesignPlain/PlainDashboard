import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ses_ReceiptRuleWorkmailAction {
  // The position of the action in the receipt rule
  position?: number;

  // The ARN of an SNS topic to notify
  topicArn?: string;

  // The ARN of the WorkMail organization
  organizationArn?: string;
}

export function ses_ReceiptRuleWorkmailAction_GetTypes(): DynamicUIProps[] {
  return [
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
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "organizationArn",
      "The ARN of the WorkMail organization",
      [],
      true,
      false,
    ),
  ];
}
