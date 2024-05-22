import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface MemberArgs {
  // If set to true, then the root user of the invited account will _not_ receive an email notification. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. By default, this is set to `false`.
  disableEmailNotification?: boolean;

  // Email address for the account.
  emailAddress?: string;

  // ARN of the behavior graph to invite the member accounts to contribute their data to.
  graphArn?: string;

  // A custom message to include in the invitation. Amazon Detective adds this message to the standard content that it sends for an invitation.
  message?: string;

  // AWS account ID for the account.
  accountId?: string;
}
export class Member extends Resource {
  // Current membership status of the member account.
  public status?: string;

  // If set to true, then the root user of the invited account will _not_ receive an email notification. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. By default, this is set to `false`.
  public disableEmailNotification?: boolean;

  // Email address for the account.
  public emailAddress?: string;

  // A custom message to include in the invitation. Amazon Detective adds this message to the standard content that it sends for an invitation.
  public message?: string;

  // ARN of the behavior graph to invite the member accounts to contribute their data to.
  public graphArn?: string;

  // Date and time, in UTC and extended RFC 3339 format, when an Amazon Detective membership invitation was last sent to the account.
  public invitedTime?: string;

  // Date and time, in UTC and extended RFC 3339 format, of the most recent change to the member account's status.
  public updatedTime?: string;

  // Data volume in bytes per day for the member account.
  public volumeUsageInBytes?: string;

  // AWS account ID for the account.
  public accountId?: string;

  // AWS account ID for the administrator account.
  public administratorId?: string;

  //
  public disabledReason?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "disableEmailNotification",
        "If set to true, then the root user of the invited account will _not_ receive an email notification. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. By default, this is set to `false`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "emailAddress",
        "Email address for the account.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "graphArn",
        "ARN of the behavior graph to invite the member accounts to contribute their data to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "message",
        "A custom message to include in the invitation. Amazon Detective adds this message to the standard content that it sends for an invitation.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "AWS account ID for the account.",
        [],
        true,
        true,
      ),
    ];
  }
}
