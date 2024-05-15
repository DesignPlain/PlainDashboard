import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_BucketEncryption {
  /*
The `id` of a Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.
You must pay attention to whether the crypto key is available in the location that this bucket is created in.
See [the docs](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) for more details.

> As per [the docs](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) for customer-managed encryption keys, the IAM policy for the
specified key must permit the [automatic Google Cloud Storage service account](https://cloud.google.com/storage/docs/projects#service-accounts) for the bucket's
project to use the specified key for encryption and decryption operations.
Although the service account email address follows a well-known format, the service account is created on-demand and may not necessarily exist for your project
until a relevant action has occurred which triggers its creation.
You should use the [`gcp.storage.getProjectServiceAccount`](https://www.terraform.io/docs/providers/google/d/storage_project_service_account.html) data source to obtain the email
address for the service account when configuring IAM policy on the Cloud KMS key.
This data source calls an API which creates the account if required, ensuring your provider applies cleanly and repeatedly irrespective of the
state of the project.
You should take care for race conditions when the same provider manages IAM policy on the Cloud KMS crypto key. See the data source page for more details.
*/
  DefaultKmsKeyName?: string;
}

export function Storage_BucketEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DefaultKmsKeyName",
      "The `id` of a Cloud KMS key that will be used to encrypt objects inserted into this bucket, if no encryption method is specified.\nYou must pay attention to whether the crypto key is available in the location that this bucket is created in.\nSee [the docs](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) for more details.\n\n> As per [the docs](https://cloud.google.com/storage/docs/encryption/using-customer-managed-keys) for customer-managed encryption keys, the IAM policy for the\nspecified key must permit the [automatic Google Cloud Storage service account](https://cloud.google.com/storage/docs/projects#service-accounts) for the bucket's\nproject to use the specified key for encryption and decryption operations.\nAlthough the service account email address follows a well-known format, the service account is created on-demand and may not necessarily exist for your project\nuntil a relevant action has occurred which triggers its creation.\nYou should use the [`gcp.storage.getProjectServiceAccount`](https://www.terraform.io/docs/providers/google/d/storage_project_service_account.html) data source to obtain the email\naddress for the service account when configuring IAM policy on the Cloud KMS key.\nThis data source calls an API which creates the account if required, ensuring your provider applies cleanly and repeatedly irrespective of the\nstate of the project.\nYou should take care for race conditions when the same provider manages IAM policy on the Cloud KMS crypto key. See the data source page for more details.",
      [],
      true,
      false,
    ),
  ];
}
