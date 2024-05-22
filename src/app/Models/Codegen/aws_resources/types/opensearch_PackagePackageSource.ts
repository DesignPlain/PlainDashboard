import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opensearch_PackagePackageSource {
  // The name of the Amazon S3 bucket containing the package.
  s3BucketName?: string;

  // Key (file name) of the package.
  s3Key?: string;
}

export function opensearch_PackagePackageSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "s3BucketName",
      "The name of the Amazon S3 bucket containing the package.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Key",
      "Key (file name) of the package.",
      [],
      true,
      true,
    ),
  ];
}
