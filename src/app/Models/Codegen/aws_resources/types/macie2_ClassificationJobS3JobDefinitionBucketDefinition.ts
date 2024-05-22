import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface macie2_ClassificationJobS3JobDefinitionBucketDefinition {
  // The unique identifier for the AWS account that owns the buckets.
  accountId?: string;

  // An array that lists the names of the buckets.
  buckets?: Array<string>;
}

export function macie2_ClassificationJobS3JobDefinitionBucketDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "buckets",
      "An array that lists the names of the buckets.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "The unique identifier for the AWS account that owns the buckets.",
      [],
      true,
      false,
    ),
  ];
}
