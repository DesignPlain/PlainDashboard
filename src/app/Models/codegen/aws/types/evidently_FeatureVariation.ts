import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  evidently_FeatureVariationValue,
  evidently_FeatureVariationValue_GetTypes,
} from './evidently_FeatureVariationValue';

export interface evidently_FeatureVariation {
  // The name of the variation. Minimum length of `1`. Maximum length of `127`.
  name?: string;

  // A block that specifies the value assigned to this variation. Detailed below
  value?: evidently_FeatureVariationValue;
}

export function evidently_FeatureVariation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the variation. Minimum length of `1`. Maximum length of `127`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'value',
      'A block that specifies the value assigned to this variation. Detailed below',
      () => evidently_FeatureVariationValue_GetTypes(),
      true,
      false,
    ),
  ];
}
