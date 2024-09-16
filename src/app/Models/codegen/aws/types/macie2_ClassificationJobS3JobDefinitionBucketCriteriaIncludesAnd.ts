import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion,
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion_GetTypes,
} from './macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion';
import {
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion,
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion_GetTypes,
} from './macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion';

export interface macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd {
  // A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding an S3 buckets from the job. (documented below)
  tagCriterion?: macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion;

  // A property-based condition that defines a property, operator, and one or more values for including or excluding an S3 buckets from the job. (documented below)
  simpleCriterion?: macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion;
}

export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'simpleCriterion',
      'A property-based condition that defines a property, operator, and one or more values for including or excluding an S3 buckets from the job. (documented below)',
      () =>
        macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndSimpleCriterion_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'tagCriterion',
      'A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding an S3 buckets from the job. (documented below)',
      () =>
        macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAndTagCriterion_GetTypes(),
      false,
      false,
    ),
  ];
}
