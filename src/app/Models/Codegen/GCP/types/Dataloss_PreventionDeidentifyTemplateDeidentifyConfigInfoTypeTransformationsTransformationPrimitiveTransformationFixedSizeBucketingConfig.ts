import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigUpperBound,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigUpperBound_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigUpperBound";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigLowerBound,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigLowerBound_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigLowerBound";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfig {
  /*
Upper bound value of buckets.
All values greater than upper_bound are grouped together into a single bucket; for example if upper_bound = 89, then all values greater than 89 are replaced with the value "89+".
The `upper_bound` block must only contain one argument. See the `fixed_size_bucketing_config` block description for more information about choosing a data type.
Structure is documented below.
*/
  upperBound?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigUpperBound;

  /*
Size of each bucket (except for minimum and maximum buckets).
So if lower_bound = 10, upper_bound = 89, and bucketSize = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+.
Precision up to 2 decimals works.
*/
  bucketSize?: number;

  /*
Lower bound value of buckets.
All values less than lower_bound are grouped together into a single bucket; for example if lower_bound = 10, then all values less than 10 are replaced with the value "-10".
The `lower_bound` block must only contain one argument. See the `fixed_size_bucketing_config` block description for more information about choosing a data type.
Structure is documented below.
*/
  lowerBound?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigLowerBound;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "upperBound",
      'Upper bound value of buckets.\nAll values greater than upper_bound are grouped together into a single bucket; for example if upper_bound = 89, then all values greater than 89 are replaced with the value "89+".\nThe `upper_bound` block must only contain one argument. See the `fixed_size_bucketing_config` block description for more information about choosing a data type.\nStructure is documented below.',
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigUpperBound_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bucketSize",
      "Size of each bucket (except for minimum and maximum buckets).\nSo if lower_bound = 10, upper_bound = 89, and bucketSize = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+.\nPrecision up to 2 decimals works.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "lowerBound",
      'Lower bound value of buckets.\nAll values less than lower_bound are grouped together into a single bucket; for example if lower_bound = 10, then all values less than 10 are replaced with the value "-10".\nThe `lower_bound` block must only contain one argument. See the `fixed_size_bucketing_config` block description for more information about choosing a data type.\nStructure is documented below.',
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigLowerBound_GetTypes(),
      true,
      false,
    ),
  ];
}
