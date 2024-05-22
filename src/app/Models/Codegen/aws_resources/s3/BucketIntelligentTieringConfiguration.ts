import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketIntelligentTieringConfigurationTiering,
  s3_BucketIntelligentTieringConfigurationTiering_GetTypes,
} from "../types/s3_BucketIntelligentTieringConfigurationTiering";
import {
  s3_BucketIntelligentTieringConfigurationFilter,
  s3_BucketIntelligentTieringConfigurationFilter_GetTypes,
} from "../types/s3_BucketIntelligentTieringConfigurationFilter";

export interface BucketIntelligentTieringConfigurationArgs {
  // Bucket filter. The configuration only includes objects that meet the filter's criteria (documented below).
  filter?: s3_BucketIntelligentTieringConfigurationFilter;

  // Unique name used to identify the S3 Intelligent-Tiering configuration for the bucket.
  name?: string;

  // Specifies the status of the configuration. Valid values: `Enabled`, `Disabled`.
  status?: string;

  // S3 Intelligent-Tiering storage class tiers of the configuration (documented below).
  tierings?: Array<s3_BucketIntelligentTieringConfigurationTiering>;

  // Name of the bucket this intelligent tiering configuration is associated with.
  bucket?: string;
}
export class BucketIntelligentTieringConfiguration extends Resource {
  // S3 Intelligent-Tiering storage class tiers of the configuration (documented below).
  public tierings?: Array<s3_BucketIntelligentTieringConfigurationTiering>;

  // Name of the bucket this intelligent tiering configuration is associated with.
  public bucket?: string;

  // Bucket filter. The configuration only includes objects that meet the filter's criteria (documented below).
  public filter?: s3_BucketIntelligentTieringConfigurationFilter;

  // Unique name used to identify the S3 Intelligent-Tiering configuration for the bucket.
  public name?: string;

  // Specifies the status of the configuration. Valid values: `Enabled`, `Disabled`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "filter",
        "Bucket filter. The configuration only includes objects that meet the filter's criteria (documented below).",
        s3_BucketIntelligentTieringConfigurationFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name used to identify the S3 Intelligent-Tiering configuration for the bucket.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "Specifies the status of the configuration. Valid values: `Enabled`, `Disabled`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tierings",
        "S3 Intelligent-Tiering storage class tiers of the configuration (documented below).",
        s3_BucketIntelligentTieringConfigurationTiering_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket this intelligent tiering configuration is associated with.",
        [],
        true,
        true,
      ),
    ];
  }
}
