import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getRegionInstanceTemplateServiceAccount {
  /*
The service account e-mail address. If not given, the
default Google Compute Engine service account is used.
*/
  Email?: string;

  /*
A list of service scopes. Both OAuth2 URLs and gcloud
short names are supported. To allow full access to all Cloud APIs, use the
`cloud-platform` scope. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).
*/
  Scopes?: Array<string>;
}

export function Compute_getRegionInstanceTemplateServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Email",
      "The service account e-mail address. If not given, the\ndefault Google Compute Engine service account is used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Scopes",
      "A list of service scopes. Both OAuth2 URLs and gcloud\nshort names are supported. To allow full access to all Cloud APIs, use the\n`cloud-platform` scope. See a complete list of scopes [here](https://cloud.google.com/sdk/gcloud/reference/alpha/compute/instances/set-scopes#--scopes).",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
