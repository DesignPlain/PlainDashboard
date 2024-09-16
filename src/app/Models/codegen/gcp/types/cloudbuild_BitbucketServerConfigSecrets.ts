import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudbuild_BitbucketServerConfigSecrets {
  // The resource name for the read access token's secret version.
  readAccessTokenVersionName?: string;

  /*
Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.

- - -
*/
  webhookSecretVersionName?: string;

  // The resource name for the admin access token's secret version.
  adminAccessTokenVersionName?: string;
}

export function cloudbuild_BitbucketServerConfigSecrets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'readAccessTokenVersionName',
      "The resource name for the read access token's secret version.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'webhookSecretVersionName',
      "Immutable. The resource name for the webhook secret's secret version. Once this field has been set, it cannot be changed.\nChanging this field will result in deleting/ recreating the resource.\n\n- - -",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'adminAccessTokenVersionName',
      "The resource name for the admin access token's secret version.",
      () => [],
      true,
      false,
    ),
  ];
}
