import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  healthcare_Hl7StoreIamMemberCondition,
  healthcare_Hl7StoreIamMemberCondition_GetTypes,
} from '../types/healthcare_Hl7StoreIamMemberCondition';

export interface Hl7StoreIamMemberArgs {
  //
  condition?: healthcare_Hl7StoreIamMemberCondition;

  /*
The HL7v2 store ID, in the form
`{project_id}/{location_name}/{dataset_name}/{hl7_v2_store_name}` or
`{location_name}/{dataset_name}/{hl7_v2_store_name}`. In the second form, the provider's
project setting will be used as a fallback.

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  hl7V2StoreId?: string;

  //
  member?: string;

  /*
The role that should be applied. Only one
`gcp.healthcare.Hl7StoreIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;
}
export class Hl7StoreIamMember extends DS_Resource {
  /*
The HL7v2 store ID, in the form
`{project_id}/{location_name}/{dataset_name}/{hl7_v2_store_name}` or
`{location_name}/{dataset_name}/{hl7_v2_store_name}`. In the second form, the provider's
project setting will be used as a fallback.

- `member/members` - (Required) Identities that will be granted the privilege in `role`.
Each entry can have one of the following values:
- --allUsers--: A special identifier that represents anyone who is on the internet; with or without a Google account.
- --allAuthenticatedUsers--: A special identifier that represents anyone who is authenticated with a Google account or a service account.
- --user:{emailid}--: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.
- --serviceAccount:{emailid}--: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.
- --group:{emailid}--: An email address that represents a Google group. For example, admins@example.com.
- --domain:{domain}--: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.
*/
  public hl7V2StoreId?: string;

  //
  public member?: string;

  /*
The role that should be applied. Only one
`gcp.healthcare.Hl7StoreIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  //
  public condition?: healthcare_Hl7StoreIamMemberCondition;

  // (Computed) The etag of the HL7v2 store's IAM policy.
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'condition',
        '',
        () => healthcare_Hl7StoreIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'hl7V2StoreId',
        "The HL7v2 store ID, in the form\n`{project_id}/{location_name}/{dataset_name}/{hl7_v2_store_name}` or\n`{location_name}/{dataset_name}/{hl7_v2_store_name}`. In the second form, the provider's\nproject setting will be used as a fallback.\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The role that should be applied. Only one\n`gcp.healthcare.Hl7StoreIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
