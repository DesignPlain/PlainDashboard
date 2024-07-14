import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_BucketV2LifecycleRuleTransition {
  // Specifies the date after which you want the corresponding action to take effect.
  date?: string;

  // Specifies the number of days after object creation when the specific rule action takes effect.
  days?: number;

  // Specifies the Amazon S3 [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_Transition.html#AmazonS3-Type-Transition-StorageClass) to which you want the object to transition.
  storageClass?: string;
}

export function s3_BucketV2LifecycleRuleTransition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Specifies the number of days after object creation when the specific rule action takes effect.",
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
    new DynamicUIProps(
      InputType.String,
      "date",
      "Specifies the date after which you want the corresponding action to take effect.",
      [],
      false,
      false,
    ),
  ];
}
