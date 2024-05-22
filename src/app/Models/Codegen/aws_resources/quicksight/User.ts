import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UserArgs {
  // Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts either  `IAM` or `QUICKSIGHT`. If `IAM` is specified, the `iam_arn` must also be specified.
  identityType?: string;

  // The Amazon Quicksight namespace to create the user in. Defaults to `default`.
  namespace?: string;

  // The name of the IAM session to use when assuming roles that can embed QuickSight dashboards. Only valid for registering users using an assumed IAM role. Additionally, if registering multiple users using the same IAM role, each user needs to have a unique session name.
  sessionName?: string;

  // The Amazon QuickSight user name that you want to create for the user you are registering. Only valid for registering a user with `identity_type` set to `QUICKSIGHT`.
  userName?: string;

  // The Amazon QuickSight role of the user. The user role can be one of the following: `READER`, `AUTHOR`, or `ADMIN`
  userRole?: string;

  // The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  awsAccountId?: string;

  // The email address of the user that you want to register.
  email?: string;

  // The ARN of the IAM user or role that you are registering with Amazon QuickSight.
  iamArn?: string;
}
export class User extends Resource {
  // The email address of the user that you want to register.
  public email?: string;

  // The name of the IAM session to use when assuming roles that can embed QuickSight dashboards. Only valid for registering users using an assumed IAM role. Additionally, if registering multiple users using the same IAM role, each user needs to have a unique session name.
  public sessionName?: string;

  // The Amazon QuickSight user name that you want to create for the user you are registering. Only valid for registering a user with `identity_type` set to `QUICKSIGHT`.
  public userName?: string;

  // The Amazon QuickSight role of the user. The user role can be one of the following: `READER`, `AUTHOR`, or `ADMIN`
  public userRole?: string;

  // Amazon Resource Name (ARN) of the user
  public arn?: string;

  // The ARN of the IAM user or role that you are registering with Amazon QuickSight.
  public iamArn?: string;

  // Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts either  `IAM` or `QUICKSIGHT`. If `IAM` is specified, the `iam_arn` must also be specified.
  public identityType?: string;

  // The Amazon Quicksight namespace to create the user in. Defaults to `default`.
  public namespace?: string;

  // The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
  public awsAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "userName",
        "The Amazon QuickSight user name that you want to create for the user you are registering. Only valid for registering a user with `identity_type` set to `QUICKSIGHT`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userRole",
        "The Amazon QuickSight role of the user. The user role can be one of the following: `READER`, `AUTHOR`, or `ADMIN`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "email",
        "The email address of the user that you want to register.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamArn",
        "The ARN of the IAM user or role that you are registering with Amazon QuickSight.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "identityType",
        "Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts either  `IAM` or `QUICKSIGHT`. If `IAM` is specified, the `iam_arn` must also be specified.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namespace",
        "The Amazon Quicksight namespace to create the user in. Defaults to `default`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sessionName",
        "The name of the IAM session to use when assuming roles that can embed QuickSight dashboards. Only valid for registering users using an assumed IAM role. Additionally, if registering multiple users using the same IAM role, each user needs to have a unique session name.",
        [],
        false,
        true,
      ),
    ];
  }
}
