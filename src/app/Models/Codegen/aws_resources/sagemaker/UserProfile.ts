import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_UserProfileUserSettings,
  sagemaker_UserProfileUserSettings_GetTypes,
} from "../types/sagemaker_UserProfileUserSettings";

export interface UserProfileArgs {
  // The ID of the associated Domain.
  domainId?: string;

  // A specifier for the type of value specified in `single_sign_on_user_value`. Currently, the only supported value is `UserName`. If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.
  singleSignOnUserIdentifier?: string;

  // The username of the associated AWS Single Sign-On User for this User Profile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.
  singleSignOnUserValue?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name for the User Profile.
  userProfileName?: string;

  // The user settings. See User Settings below.
  userSettings?: sagemaker_UserProfileUserSettings;
}
export class UserProfile extends Resource {
  // A specifier for the type of value specified in `single_sign_on_user_value`. Currently, the only supported value is `UserName`. If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.
  public singleSignOnUserIdentifier?: string;

  // The username of the associated AWS Single Sign-On User for this User Profile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.
  public singleSignOnUserValue?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The name for the User Profile.
  public userProfileName?: string;

  // The ID of the associated Domain.
  public domainId?: string;

  // The ID of the user's profile in the Amazon Elastic File System (EFS) volume.
  public homeEfsFileSystemUid?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The user settings. See User Settings below.
  public userSettings?: sagemaker_UserProfileUserSettings;

  // The user profile Amazon Resource Name (ARN).
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "singleSignOnUserIdentifier",
        "A specifier for the type of value specified in `single_sign_on_user_value`. Currently, the only supported value is `UserName`. If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "singleSignOnUserValue",
        "The username of the associated AWS Single Sign-On User for this User Profile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userProfileName",
        "The name for the User Profile.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "userSettings",
        "The user settings. See User Settings below.",
        sagemaker_UserProfileUserSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainId",
        "The ID of the associated Domain.",
        [],
        true,
        true,
      ),
    ];
  }
}
