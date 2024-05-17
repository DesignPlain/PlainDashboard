import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Healthcare_FhirStoreIamMemberCondition,
  Healthcare_FhirStoreIamMemberCondition_GetTypes,
} from "../types/Healthcare_FhirStoreIamMemberCondition";

export interface FhirStoreIamMemberArgs {
  //
  Member?: string;

  /*
The role that should be applied. Only one
`gcp.healthcare.FhirStoreIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  //
  Condition?: Healthcare_FhirStoreIamMemberCondition;

  /*
The FHIR store ID, in the form
`{project_id}/{location_name}/{dataset_name}/{fhir_store_name}` or
`{location_name}/{dataset_name}/{fhir_store_name}`. In the second form, the provider's
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
  FhirStoreId?: string;
}
export class FhirStoreIamMember extends Resource {
  //
  public Condition?: Healthcare_FhirStoreIamMemberCondition;

  // (Computed) The etag of the FHIR store's IAM policy.
  public Etag?: string;

  /*
The FHIR store ID, in the form
`{project_id}/{location_name}/{dataset_name}/{fhir_store_name}` or
`{location_name}/{dataset_name}/{fhir_store_name}`. In the second form, the provider's
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
  public FhirStoreId?: string;

  //
  public Member?: string;

  /*
The role that should be applied. Only one
`gcp.healthcare.FhirStoreIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.healthcare.FhirStoreIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Healthcare_FhirStoreIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "FhirStoreId",
        "The FHIR store ID, in the form\n`{project_id}/{location_name}/{dataset_name}/{fhir_store_name}` or\n`{location_name}/{dataset_name}/{fhir_store_name}`. In the second form, the provider's\nproject setting will be used as a fallback.\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        [],
        true,
        true,
      ),
    ];
  }
}
