import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketLifecycleConfigurationV2RuleExpiration {
  // Date the object is to be moved or deleted. The date value must be in [RFC3339 full-date format](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) e.g. `2023-08-22`.
  date?: string;

  // Lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.
  days?: number;

  // Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to `true`, the delete marker will be expired; if set to `false` the policy takes no action.
  expiredObjectDeleteMarker?: boolean;
}

export function s3_BucketLifecycleConfigurationV2RuleExpiration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "date",
      "Date the object is to be moved or deleted. The date value must be in [RFC3339 full-date format](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) e.g. `2023-08-22`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Lifetime, in days, of the objects that are subject to the rule. The value must be a non-zero positive integer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "expiredObjectDeleteMarker",
      "Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set to `true`, the delete marker will be expired; if set to `false` the policy takes no action.",
      [],
      false,
      false,
    ),
  ];
}
