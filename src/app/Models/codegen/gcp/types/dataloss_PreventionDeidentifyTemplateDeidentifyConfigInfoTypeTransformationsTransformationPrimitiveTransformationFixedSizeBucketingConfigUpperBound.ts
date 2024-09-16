import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigUpperBound {
  // An integer value (int64 format)
  integerValue?: string;

  // A float value.
  floatValue?: number;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigUpperBound_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'floatValue',
      'A float value.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'integerValue',
      'An integer value (int64 format)',
      () => [],
      false,
      false,
    ),
  ];
}
