import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue,
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue_GetTypes,
} from './macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue';

export interface macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion {
  // The operator to use in the condition. Valid combination and values are available in the [AWS Documentation](https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html#jobs-model-jobcomparator)
  comparator?: string;

  // The  tag key and value pairs to use in the condition. One or more blocks are allowed. (documented below)
  tagValues?: Array<macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue>;
}

export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'comparator',
      'The operator to use in the condition. Valid combination and values are available in the [AWS Documentation](https://docs.aws.amazon.com/macie/latest/APIReference/jobs.html#jobs-model-jobcomparator)',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'tagValues',
      'The  tag key and value pairs to use in the condition. One or more blocks are allowed. (documented below)',
      () =>
        macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue_GetTypes(),
      false,
      false,
    ),
  ];
}
