import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  tags_TagKeyIamMemberCondition,
  tags_TagKeyIamMemberCondition_GetTypes,
} from '../types/tags_TagKeyIamMemberCondition';

export interface TagKeyIamMemberArgs {
  //
  condition?: tags_TagKeyIamMemberCondition;

  //
  member?: string;

  /*
The role that should be applied. Only one
`gcp.tags.TagKeyIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;

  /*
Used to find the parent resource to bind the IAM policy to

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
- --projectOwner:projectid--: Owners of the given project. For example, "projectOwner:my-example-project"
- --projectEditor:projectid--: Editors of the given project. For example, "projectEditor:my-example-project"
- --projectViewer:projectid--: Viewers of the given project. For example, "projectViewer:my-example-project"
*/
  tagKey?: string;
}
export class TagKeyIamMember extends DS_Resource {
  //
  public condition?: tags_TagKeyIamMemberCondition;

  // (Computed) The etag of the IAM policy.
  public etag?: string;

  //
  public member?: string;

  /*
The role that should be applied. Only one
`gcp.tags.TagKeyIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  /*
Used to find the parent resource to bind the IAM policy to

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
- --projectOwner:projectid--: Owners of the given project. For example, "projectOwner:my-example-project"
- --projectEditor:projectid--: Editors of the given project. For example, "projectEditor:my-example-project"
- --projectViewer:projectid--: Viewers of the given project. For example, "projectViewer:my-example-project"
*/
  public tagKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'tagKey',
        'Used to find the parent resource to bind the IAM policy to\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.\n* **projectOwner:projectid**: Owners of the given project. For example, "projectOwner:my-example-project"\n* **projectEditor:projectid**: Editors of the given project. For example, "projectEditor:my-example-project"\n* **projectViewer:projectid**: Viewers of the given project. For example, "projectViewer:my-example-project"',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => tags_TagKeyIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The role that should be applied. Only one\n`gcp.tags.TagKeyIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
