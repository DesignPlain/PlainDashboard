import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  macie2_ClassificationJobS3JobDefinitionBucketCriteria,
  macie2_ClassificationJobS3JobDefinitionBucketCriteria_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionBucketCriteria";
import {
  macie2_ClassificationJobS3JobDefinitionBucketDefinition,
  macie2_ClassificationJobS3JobDefinitionBucketDefinition_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionBucketDefinition";
import {
  macie2_ClassificationJobS3JobDefinitionScoping,
  macie2_ClassificationJobS3JobDefinitionScoping_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionScoping";

export interface macie2_ClassificationJobS3JobDefinition {
  // The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Conflicts with `bucket_definitions`. (documented below)
  bucketCriteria?: macie2_ClassificationJobS3JobDefinitionBucketCriteria;

  // An array of objects, one for each AWS account that owns buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for the account. Conflicts with `bucket_criteria`. (documented below)
  bucketDefinitions?: Array<macie2_ClassificationJobS3JobDefinitionBucketDefinition>;

  // The property- and tag-based conditions that determine which objects to include or exclude from the analysis. (documented below)
  scoping?: macie2_ClassificationJobS3JobDefinitionScoping;
}

export function macie2_ClassificationJobS3JobDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "bucketCriteria",
      "The property- and tag-based conditions that determine which S3 buckets to include or exclude from the analysis. Conflicts with `bucket_definitions`. (documented below)",
      macie2_ClassificationJobS3JobDefinitionBucketCriteria_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "bucketDefinitions",
      "An array of objects, one for each AWS account that owns buckets to analyze. Each object specifies the account ID for an account and one or more buckets to analyze for the account. Conflicts with `bucket_criteria`. (documented below)",
      macie2_ClassificationJobS3JobDefinitionBucketDefinition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "scoping",
      "The property- and tag-based conditions that determine which objects to include or exclude from the analysis. (documented below)",
      macie2_ClassificationJobS3JobDefinitionScoping_GetTypes(),
      false,
      false,
    ),
  ];
}
