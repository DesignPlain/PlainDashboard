import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface osconfig_GuestPoliciesRecipeArtifactGcs {
  /*
Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
this value would be my-bucket.
*/
  bucket?: string;

  /*
Must be provided if allowInsecure is false. Generation number of the Google Cloud Storage object.
https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be 1234567.
*/
  generation?: number;

  /*
Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
this value would be foo/bar.
*/
  object?: string;
}

export function osconfig_GuestPoliciesRecipeArtifactGcs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'object',
      'Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567\nthis value would be foo/bar.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567\nthis value would be my-bucket.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'generation',
      'Must be provided if allowInsecure is false. Generation number of the Google Cloud Storage object.\nhttps://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be 1234567.',
      () => [],
      false,
      false,
    ),
  ];
}
