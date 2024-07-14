import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  athena_WorkgroupConfigurationResultConfiguration,
  athena_WorkgroupConfigurationResultConfiguration_GetTypes,
} from "./athena_WorkgroupConfigurationResultConfiguration";
import {
  athena_WorkgroupConfigurationEngineVersion,
  athena_WorkgroupConfigurationEngineVersion_GetTypes,
} from "./athena_WorkgroupConfigurationEngineVersion";

export interface athena_WorkgroupConfiguration {
  // Boolean whether Amazon CloudWatch metrics are enabled for the workgroup. Defaults to `true`.
  publishCloudwatchMetricsEnabled?: boolean;

  // If set to true , allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false , workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is false . For more information about Requester Pays buckets, see [Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) in the Amazon Simple Storage Service Developer Guide.
  requesterPaysEnabled?: boolean;

  // Configuration block with result settings. See Result Configuration below.
  resultConfiguration?: athena_WorkgroupConfigurationResultConfiguration;

  // Integer for the upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. Must be at least `10485760`.
  bytesScannedCutoffPerQuery?: number;

  // Boolean whether the settings for the workgroup override client-side settings. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html). Defaults to `true`.
  enforceWorkgroupConfiguration?: boolean;

  // Configuration block for the Athena Engine Versioning. For more information, see [Athena Engine Versioning](https://docs.aws.amazon.com/athena/latest/ug/engine-versions.html). See Engine Version below.
  engineVersion?: athena_WorkgroupConfigurationEngineVersion;

  // Role used in a notebook session for accessing the user's resources.
  executionRole?: string;
}

export function athena_WorkgroupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "engineVersion",
      "Configuration block for the Athena Engine Versioning. For more information, see [Athena Engine Versioning](https://docs.aws.amazon.com/athena/latest/ug/engine-versions.html). See Engine Version below.",
      athena_WorkgroupConfigurationEngineVersion_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "executionRole",
      "Role used in a notebook session for accessing the user's resources.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "publishCloudwatchMetricsEnabled",
      "Boolean whether Amazon CloudWatch metrics are enabled for the workgroup. Defaults to `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requesterPaysEnabled",
      "If set to true , allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. If set to false , workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error. The default is false . For more information about Requester Pays buckets, see [Requester Pays Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html) in the Amazon Simple Storage Service Developer Guide.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "resultConfiguration",
      "Configuration block with result settings. See Result Configuration below.",
      athena_WorkgroupConfigurationResultConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bytesScannedCutoffPerQuery",
      "Integer for the upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. Must be at least `10485760`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enforceWorkgroupConfiguration",
      "Boolean whether the settings for the workgroup override client-side settings. For more information, see [Workgroup Settings Override Client-Side Settings](https://docs.aws.amazon.com/athena/latest/ug/workgroups-settings-override.html). Defaults to `true`.",
      [],
      false,
      false,
    ),
  ];
}
