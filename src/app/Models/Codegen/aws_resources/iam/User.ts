import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface UserArgs {
  // The user's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. User names are not distinguished by case. For example, you cannot create users named both "TESTUSER" and "testuser".
  name?: string;

  // Path in which to create the user.
  path?: string;

  // The ARN of the policy that is used to set the permissions boundary for the user.
  permissionsBoundary?: string;

  // Key-value mapping of tags for the IAM user. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
When destroying this user, destroy even if it
has non-provider-managed IAM access keys, login profile or MFA devices. Without `force_destroy`
a user with non-provider-managed access keys and login profile will fail to be destroyed.
*/
  forceDestroy?: boolean;
}
export class User extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The [unique ID][1] assigned by AWS.
  public uniqueId?: string;

  // The ARN assigned by AWS for this user.
  public arn?: string;

  /*
When destroying this user, destroy even if it
has non-provider-managed IAM access keys, login profile or MFA devices. Without `force_destroy`
a user with non-provider-managed access keys and login profile will fail to be destroyed.
*/
  public forceDestroy?: boolean;

  // The user's name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. User names are not distinguished by case. For example, you cannot create users named both "TESTUSER" and "testuser".
  public name?: string;

  // Path in which to create the user.
  public path?: string;

  // The ARN of the policy that is used to set the permissions boundary for the user.
  public permissionsBoundary?: string;

  // Key-value mapping of tags for the IAM user. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        'The user\'s name. The name must consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: `=,.@-_.`. User names are not distinguished by case. For example, you cannot create users named both "TESTUSER" and "testuser".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "path",
        "Path in which to create the user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "permissionsBoundary",
        "The ARN of the policy that is used to set the permissions boundary for the user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of tags for the IAM user. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDestroy",
        "When destroying this user, destroy even if it\nhas non-provider-managed IAM access keys, login profile or MFA devices. Without `force_destroy`\na user with non-provider-managed access keys and login profile will fail to be destroyed.",
        [],
        false,
        false,
      ),
    ];
  }
}
