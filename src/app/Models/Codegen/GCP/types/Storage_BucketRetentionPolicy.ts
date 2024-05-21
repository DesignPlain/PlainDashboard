import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface storage_BucketRetentionPolicy {
  // If set to `true`, the bucket will be [locked](https://cloud.google.com/storage/docs/using-bucket-lock#lock-bucket) and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.
  isLocked?: boolean;

  // The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 2,147,483,647 seconds.
  retentionPeriod?: number;
}

export function storage_BucketRetentionPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "isLocked",
      "If set to `true`, the bucket will be [locked](https://cloud.google.com/storage/docs/using-bucket-lock#lock-bucket) and permanently restrict edits to the bucket's retention policy.  Caution: Locking a bucket is an irreversible action.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retentionPeriod",
      "The period of time, in seconds, that objects in the bucket must be retained and cannot be deleted, overwritten, or archived. The value must be less than 2,147,483,647 seconds.",
      [],
      true,
      false,
    ),
  ];
}
