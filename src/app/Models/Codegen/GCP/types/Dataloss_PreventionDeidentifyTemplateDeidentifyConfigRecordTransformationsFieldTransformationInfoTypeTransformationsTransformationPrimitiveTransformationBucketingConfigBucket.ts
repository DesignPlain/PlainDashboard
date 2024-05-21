import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMin,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMin_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMin";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketReplacementValue,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketReplacementValue_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketReplacementValue";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMax,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMax_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMax";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucket {
  /*
Lower bound of the range, inclusive. Type should be the same as max if used.
The `min` block must only contain one argument. See the `bucketing_config` block description for more information about choosing a data type.
Structure is documented below.
*/
  min?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMin;

  /*
Replacement value for this bucket.
The `replacement_value` block must only contain one argument.
Structure is documented below.
*/
  replacementValue?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketReplacementValue;

  /*
Upper bound of the range, exclusive; type must match min.
The `max` block must only contain one argument. See the `bucketing_config` block description for more information about choosing a data type.
Structure is documented below.
*/
  max?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMax;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "min",
      "Lower bound of the range, inclusive. Type should be the same as max if used.\nThe `min` block must only contain one argument. See the `bucketing_config` block description for more information about choosing a data type.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMin_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "replacementValue",
      "Replacement value for this bucket.\nThe `replacement_value` block must only contain one argument.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketReplacementValue_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "max",
      "Upper bound of the range, exclusive; type must match min.\nThe `max` block must only contain one argument. See the `bucketing_config` block description for more information about choosing a data type.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationInfoTypeTransformationsTransformationPrimitiveTransformationBucketingConfigBucketMax_GetTypes(),
      false,
      false,
    ),
  ];
}
