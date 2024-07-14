import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketIntelligentTieringConfigurationTiering {
  // S3 Intelligent-Tiering access tier. Valid values: `ARCHIVE_ACCESS`, `DEEP_ARCHIVE_ACCESS`.
  accessTier?: string;

  // Number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier.
  days?: number;
}

export function s3_BucketIntelligentTieringConfigurationTiering_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessTier",
      "S3 Intelligent-Tiering access tier. Valid values: `ARCHIVE_ACCESS`, `DEEP_ARCHIVE_ACCESS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier.",
      [],
      true,
      false,
    ),
  ];
}
