import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  healthcare_FhirStoreIamBindingCondition,
  healthcare_FhirStoreIamBindingCondition_GetTypes,
} from "../types/healthcare_FhirStoreIamBindingCondition";

export interface FhirStoreIamBindingArgs {
  /*
The role that should be applied. Only one
`gcp.healthcare.FhirStoreIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  role?: string;

  //
  condition?: healthcare_FhirStoreIamBindingCondition;

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
  fhirStoreId?: string;

  //
  members?: Array<string>;
}
export class FhirStoreIamBinding extends Resource {
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
  public fhirStoreId?: string;

  //
  public members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.healthcare.FhirStoreIamBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public role?: string;

  //
  public condition?: healthcare_FhirStoreIamBindingCondition;

  // (Computed) The etag of the FHIR store's IAM policy.
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        healthcare_FhirStoreIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fhirStoreId",
        "The FHIR store ID, in the form\n`{project_id}/{location_name}/{dataset_name}/{fhir_store_name}` or\n`{location_name}/{dataset_name}/{fhir_store_name}`. In the second form, the provider's\nproject setting will be used as a fallback.\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "The role that should be applied. Only one\n`gcp.healthcare.FhirStoreIamBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
        [],
        true,
        true,
      ),
    ];
  }
}
