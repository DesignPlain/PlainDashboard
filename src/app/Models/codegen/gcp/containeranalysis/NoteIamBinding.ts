import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  containeranalysis_NoteIamBindingCondition,
  containeranalysis_NoteIamBindingCondition_GetTypes,
} from '../types/containeranalysis_NoteIamBindingCondition';

export interface NoteIamBindingArgs {
  //
  members?: Array<string>;

  // Used to find the parent resource to bind the IAM policy to
  note?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the project will be parsed from the identifier of the parent resource. If no project is provided in the parent identifier and no project is specified, the provider project is used.

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
  project?: string;

  /*
The role that should be applied. Only one
`gcp.containeranalysis.NoteIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;

  //
  condition?: containeranalysis_NoteIamBindingCondition;
}
export class NoteIamBinding extends DS_Resource {
  //
  public members?: Array<string>;

  // Used to find the parent resource to bind the IAM policy to
  public note?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the project will be parsed from the identifier of the parent resource. If no project is provided in the parent identifier and no project is specified, the provider project is used.

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
  public project?: string;

  /*
The role that should be applied. Only one
`gcp.containeranalysis.NoteIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  //
  public condition?: containeranalysis_NoteIamBindingCondition;

  // (Computed) The etag of the IAM policy.
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'members',
        '',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'note',
        'Used to find the parent resource to bind the IAM policy to',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the project will be parsed from the identifier of the parent resource. If no project is provided in the parent identifier and no project is specified, the provider project is used.\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.\n* **projectOwner:projectid**: Owners of the given project. For example, "projectOwner:my-example-project"\n* **projectEditor:projectid**: Editors of the given project. For example, "projectEditor:my-example-project"\n* **projectViewer:projectid**: Viewers of the given project. For example, "projectViewer:my-example-project"',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The role that should be applied. Only one\n`gcp.containeranalysis.NoteIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => containeranalysis_NoteIamBindingCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
