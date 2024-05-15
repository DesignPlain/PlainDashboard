import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_BitbucketServerConfigSecrets {
  // The resource name for the admin access token's secret version.
  AdminAccessTokenVersionName?: string;

  // The resource name for the read access token's secret version.
  ReadAccessTokenVersionName?: string;

  /*
Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

- - -
*/
  WebhookSecretVersionName?: string;
}

export function Cloudbuild_BitbucketServerConfigSecrets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AdminAccessTokenVersionName",
      "The resource name for the admin access token's secret version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ReadAccessTokenVersionName",
      "The resource name for the read access token's secret version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WebhookSecretVersionName",
      "Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.\nChanging this field will result in deleting/ recreating the resource.\n\n- - -",
      [],
      true,
      true,
    ),
  ];
}
