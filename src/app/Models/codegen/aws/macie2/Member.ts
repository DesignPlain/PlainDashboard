import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface MemberArgs {
  // The email address for the account.
  email?: string;

  // Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to `true`.
  invitationDisableEmailNotification?: boolean;

  // A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation.
  invitationMessage?: string;

  // Send an invitation to a member
  invite?: boolean;

  // Specifies the status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to `ENABLED`. Valid values are `ENABLED` or `PAUSED`.
  status?: string;

  // A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.
  tags?: Map<string, string>;

  // The AWS account ID for the account.
  accountId?: string;
}
export class Member extends DS_Resource {
  // Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to `true`.
  public invitationDisableEmailNotification?: boolean;

  // A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation.
  public invitationMessage?: string;

  // Specifies the status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to `ENABLED`. Valid values are `ENABLED` or `PAUSED`.
  public status?: string;

  // A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.
  public tags?: Map<string, string>;

  // The email address for the account.
  public email?: string;

  // The date and time, in UTC and extended RFC 3339 format, when an Amazon Macie membership invitation was last sent to the account. This value is null if a Macie invitation hasn't been sent to the account.
  public invitedAt?: string;

  // The date and time, in UTC and extended RFC 3339 format, of the most recent change to the status of the relationship between the account and the administrator account.
  public updatedAt?: string;

  // The AWS account ID for the account.
  public accountId?: string;

  // The AWS account ID for the administrator account.
  public administratorAccountId?: string;

  // The Amazon Resource Name (ARN) of the account.
  public arn?: string;

  // Send an invitation to a member
  public invite?: boolean;

  //
  public masterAccountId?: string;

  // The current status of the relationship between the account and the administrator account.
  public relationshipStatus?: string;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "email",
        "The email address for the account.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "invitationDisableEmailNotification",
        "Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to `true`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "invitationMessage",
        "A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "invite",
        "Send an invitation to a member",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "Specifies the status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to `ENABLED`. Valid values are `ENABLED` or `PAUSED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of key-value pairs that specifies the tags to associate with the account in Amazon Macie.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The AWS account ID for the account.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
