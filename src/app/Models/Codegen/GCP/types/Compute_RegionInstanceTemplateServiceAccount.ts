import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionInstanceTemplateServiceAccount {
  /*
The service account e-mail address. If not given, the
default Google Compute Engine service account is used.
*/
  email?: string;

  /*
A list of service scopes. Both OAuth2 URLs and gcloud
short names are supported. To allow full access to all Cloud APIs, use the
`cloud-platform` scope. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).

The [service accounts documentation](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam)
explains that access scopes are the legacy method of specifying permissions for your instance.
To follow best practices you should create a dedicated service account with the minimum permissions the VM requires.
To use a dedicated service account this field should be configured as a list containing the `cloud-platform` scope.
See [Authenticate workloads using service accounts best practices](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances#best_practices)
and [Best practices for using service accounts](https://cloud.google.com/iam/docs/best-practices-service-accounts#single-purpose).
*/
  scopes?: Array<string>;
}

export function compute_RegionInstanceTemplateServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "email",
      "The service account e-mail address. If not given, the\ndefault Google Compute Engine service account is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scopes",
      "A list of service scopes. Both OAuth2 URLs and gcloud\nshort names are supported. To allow full access to all Cloud APIs, use the\n`cloud-platform` scope. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).\n\nThe [service accounts documentation](https://cloud.google.com/compute/docs/access/service-accounts#accesscopesiam)\nexplains that access scopes are the legacy method of specifying permissions for your instance.\nTo follow best practices you should create a dedicated service account with the minimum permissions the VM requires.\nTo use a dedicated service account this field should be configured as a list containing the `cloud-platform` scope.\nSee [Authenticate workloads using service accounts best practices](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances#best_practices)\nand [Best practices for using service accounts](https://cloud.google.com/iam/docs/best-practices-service-accounts#single-purpose).",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
