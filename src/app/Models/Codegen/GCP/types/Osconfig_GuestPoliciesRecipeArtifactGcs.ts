import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Osconfig_GuestPoliciesRecipeArtifactGcs {
  /*
Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
this value would be foo/bar.
*/
  Object?: string;

  /*
Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
this value would be my-bucket.
*/
  Bucket?: string;

  /*
Must be provided if allowInsecure is false. Generation number of the Google Cloud Storage object.
https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be 1234567.
*/
  Generation?: number;
}

export function Osconfig_GuestPoliciesRecipeArtifactGcs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Generation",
      "Must be provided if allowInsecure is false. Generation number of the Google Cloud Storage object.\nhttps://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be 1234567.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Object",
      "Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567\nthis value would be foo/bar.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567\nthis value would be my-bucket.",
      [],
      false,
      false,
    ),
  ];
}
