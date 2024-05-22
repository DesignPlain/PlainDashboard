import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3control_BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload,
  s3control_BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload_GetTypes,
} from "./s3control_BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload";
import {
  s3control_BucketLifecycleConfigurationRuleExpiration,
  s3control_BucketLifecycleConfigurationRuleExpiration_GetTypes,
} from "./s3control_BucketLifecycleConfigurationRuleExpiration";
import {
  s3control_BucketLifecycleConfigurationRuleFilter,
  s3control_BucketLifecycleConfigurationRuleFilter_GetTypes,
} from "./s3control_BucketLifecycleConfigurationRuleFilter";

export interface s3control_BucketLifecycleConfigurationRule {
  // Configuration block containing settings for abort incomplete multipart upload.
  abortIncompleteMultipartUpload?: s3control_BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload;

  // Configuration block containing settings for expiration of objects.
  expiration?: s3control_BucketLifecycleConfigurationRuleExpiration;

  // Configuration block containing settings for filtering.
  filter?: s3control_BucketLifecycleConfigurationRuleFilter;

  // Unique identifier for the rule.
  id?: string;

  // Status of the rule. Valid values: `Enabled` and `Disabled`. Defaults to `Enabled`.
  status?: string;
}

export function s3control_BucketLifecycleConfigurationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Status of the rule. Valid values: `Enabled` and `Disabled`. Defaults to `Enabled`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "abortIncompleteMultipartUpload",
      "Configuration block containing settings for abort incomplete multipart upload.",
      s3control_BucketLifecycleConfigurationRuleAbortIncompleteMultipartUpload_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "expiration",
      "Configuration block containing settings for expiration of objects.",
      s3control_BucketLifecycleConfigurationRuleExpiration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "filter",
      "Configuration block containing settings for filtering.",
      s3control_BucketLifecycleConfigurationRuleFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the rule.",
      [],
      true,
      false,
    ),
  ];
}
