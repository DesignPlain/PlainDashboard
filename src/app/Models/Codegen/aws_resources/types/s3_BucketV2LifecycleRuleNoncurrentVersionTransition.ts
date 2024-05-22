import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface s3_BucketV2LifecycleRuleNoncurrentVersionTransition {
  // Specifies the number of days noncurrent object versions transition.
  days?: number;

  // Specifies the Amazon S3 [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Transition.html#AmazonS3-Type-Transition-StorageClass) to which you want the object to transition.
  storageClass?: string;
}

export function s3_BucketV2LifecycleRuleNoncurrentVersionTransition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Specifies the number of days noncurrent object versions transition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "storageClass",
      "Specifies the Amazon S3 [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Transition.html#AmazonS3-Type-Transition-StorageClass) to which you want the object to transition.",
      [],
      true,
      false,
    ),
  ];
}
