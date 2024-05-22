import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AccountSubscriptionArgs {
  // Name of your Amazon QuickSight account. This name is unique over all of AWS, and it appears only when users sign in.
  accountName?: string;

  // Name of your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Amazon QuickSight account.
  activeDirectoryName?: string;

  // Admin group associated with your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Amazon QuickSight account.
  adminGroups?: Array<string>;

  // Author group associated with your Active Directory.
  authorGroups?: Array<string>;

  // AWS account ID hosting the QuickSight account. Default to provider account.
  awsAccountId?: string;

  // Edition of Amazon QuickSight that you want your account to have. Currently, you can choose from `STANDARD`, `ENTERPRISE` or `ENTERPRISE_AND_Q`.
  edition?: string;

  // Email address of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.
  emailAddress?: string;

  // Reader group associated with your Active Direcrtory.
  readerGroups?: Array<string>;

  // Method that you want to use to authenticate your Amazon QuickSight account. Currently, the valid values for this parameter are `IAM_AND_QUICKSIGHT`, `IAM_ONLY`, `IAM_IDENTITY_CENTER`, and `ACTIVE_DIRECTORY`.
  authenticationMethod?: string;

  // A 10-digit phone number for the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.
  contactNumber?: string;

  // Active Directory ID that is associated with your Amazon QuickSight account.
  directoryId?: string;

  // Last name of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.
  lastName?: string;

  /*
Email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription.

The following arguments are optional:
*/
  notificationEmail?: string;

  // Realm of the Active Directory that is associated with your Amazon QuickSight account.
  realm?: string;

  // First name of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.
  firstName?: string;
}
export class AccountSubscription extends Resource {
  // Edition of Amazon QuickSight that you want your account to have. Currently, you can choose from `STANDARD`, `ENTERPRISE` or `ENTERPRISE_AND_Q`.
  public edition?: string;

  // Email address of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.
  public emailAddress?: string;

  // Reader group associated with your Active Direcrtory.
  public readerGroups?: Array<string>;

  // Active Directory ID that is associated with your Amazon QuickSight account.
  public directoryId?: string;

  // AWS account ID hosting the QuickSight account. Default to provider account.
  public awsAccountId?: string;

  // A 10-digit phone number for the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.
  public contactNumber?: string;

  // Realm of the Active Directory that is associated with your Amazon QuickSight account.
  public realm?: string;

  // Author group associated with your Active Directory.
  public authorGroups?: Array<string>;

  // Method that you want to use to authenticate your Amazon QuickSight account. Currently, the valid values for this parameter are `IAM_AND_QUICKSIGHT`, `IAM_ONLY`, `IAM_IDENTITY_CENTER`, and `ACTIVE_DIRECTORY`.
  public authenticationMethod?: string;

  /*
Email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription.

The following arguments are optional:
*/
  public notificationEmail?: string;

  // Name of your Amazon QuickSight account. This name is unique over all of AWS, and it appears only when users sign in.
  public accountName?: string;

  // Name of your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Amazon QuickSight account.
  public activeDirectoryName?: string;

  // Admin group associated with your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Amazon QuickSight account.
  public adminGroups?: Array<string>;

  // First name of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.
  public firstName?: string;

  // Last name of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.
  public lastName?: string;

  // Status of the Amazon QuickSight account's subscription.
  public accountSubscriptionStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "emailAddress",
        "Email address of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authenticationMethod",
        "Method that you want to use to authenticate your Amazon QuickSight account. Currently, the valid values for this parameter are `IAM_AND_QUICKSIGHT`, `IAM_ONLY`, `IAM_IDENTITY_CENTER`, and `ACTIVE_DIRECTORY`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "adminGroups",
        "Admin group associated with your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Amazon QuickSight account.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "activeDirectoryName",
        "Name of your Active Directory. This field is required if `ACTIVE_DIRECTORY` is the selected authentication method of the new Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "contactNumber",
        "A 10-digit phone number for the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationEmail",
        "Email address that you want Amazon QuickSight to send notifications to regarding your Amazon QuickSight account or Amazon QuickSight subscription.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "realm",
        "Realm of the Active Directory that is associated with your Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "firstName",
        "First name of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountName",
        "Name of your Amazon QuickSight account. This name is unique over all of AWS, and it appears only when users sign in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "edition",
        "Edition of Amazon QuickSight that you want your account to have. Currently, you can choose from `STANDARD`, `ENTERPRISE` or `ENTERPRISE_AND_Q`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "Active Directory ID that is associated with your Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID hosting the QuickSight account. Default to provider account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "readerGroups",
        "Reader group associated with your Active Direcrtory.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "lastName",
        "Last name of the author of the Amazon QuickSight account to use for future communications. This field is required if `ENTERPPRISE_AND_Q` is the selected edition of the new Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "authorGroups",
        "Author group associated with your Active Directory.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
