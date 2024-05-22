import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3control_getMultiRegionAccessPointRegion {
  // The name of the bucket.
  bucket?: string;

  // The AWS account ID that owns the bucket.
  bucketAccountId?: string;

  // The name of the region.
  region?: string;
}

export function s3control_getMultiRegionAccessPointRegion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The name of the bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketAccountId",
      "The AWS account ID that owns the bucket.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "The name of the region.",
      [],
      true,
      false,
    ),
  ];
}
