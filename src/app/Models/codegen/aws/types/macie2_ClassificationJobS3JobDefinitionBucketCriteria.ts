import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes,
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes_GetTypes,
} from './macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes';
import {
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludes,
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludes_GetTypes,
} from './macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludes';

export interface macie2_ClassificationJobS3JobDefinitionBucketCriteria {
  // The property- or tag-based conditions that determine which S3 buckets to include in the analysis. (documented below)
  includes?: macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes;

  // The property- or tag-based conditions that determine which S3 buckets to exclude from the analysis. (documented below)
  excludes?: macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludes;
}

export function macie2_ClassificationJobS3JobDefinitionBucketCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'includes',
      'The property- or tag-based conditions that determine which S3 buckets to include in the analysis. (documented below)',
      () =>
        macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'excludes',
      'The property- or tag-based conditions that determine which S3 buckets to exclude from the analysis. (documented below)',
      () =>
        macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludes_GetTypes(),
      false,
      false,
    ),
  ];
}
