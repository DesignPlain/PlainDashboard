import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { Hl7StoreIAMBindingCondition } from "../types/Hl7StoreIAMBindingCondition";

export interface Hl7StoreIAMBindingArgs {
  /*
The role that should be applied. Only one
`gcp.healthcare.Hl7StoreIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  Role?: string;

  //
  Condition?: Hl7StoreIAMBindingCondition;

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
  Hl7V2StoreId?: string;

  //
  Members?: Array<string>;
}
export class Hl7StoreIAMBinding extends Resource {
  //
  public Condition?: Hl7StoreIAMBindingCondition;

  // (Computed) The etag of the HL7v2 store's IAM policy.
  public Etag?: string;

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
  public Hl7V2StoreId?: string;

  //
  public Members?: Array<string>;

  /*
The role that should be applied. Only one
`gcp.healthcare.Hl7StoreIAMBinding` can be used per role. Note that custom roles must be of the format
`[projects|organizations]/{parent-name}/roles/{role-name}`.
*/
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "The role that should be applied. Only one\n`gcp.healthcare.Hl7StoreIAMBinding` can be used per role. Note that custom roles must be of the format\n`[projects|organizations]/{parent-name}/roles/{role-name}`.",
      ),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(
        InputType.String,
        "Hl7V2StoreId",
        "The HL7v2 store ID, in the form\n`{project_id}/{location_name}/{dataset_name}/{hl7_v2_store_name}` or\n`{location_name}/{dataset_name}/{hl7_v2_store_name}`. In the second form, the provider's\nproject setting will be used as a fallback.\n\n* `member/members` - (Required) Identities that will be granted the privilege in `role`.\nEach entry can have one of the following values:\n* **allUsers**: A special identifier that represents anyone who is on the internet; with or without a Google account.\n* **allAuthenticatedUsers**: A special identifier that represents anyone who is authenticated with a Google account or a service account.\n* **user:{emailid}**: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com.\n* **serviceAccount:{emailid}**: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com.\n* **group:{emailid}**: An email address that represents a Google group. For example, admins@example.com.\n* **domain:{domain}**: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.",
      ),
    ];
  }
}
