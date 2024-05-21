import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigLowerBound {
  // A float value.
  floatValue?: number;

  // An integer value (int64 format)
  integerValue?: string;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationPrimitiveTransformationFixedSizeBucketingConfigLowerBound_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "floatValue",
      "A float value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "integerValue",
      "An integer value (int64 format)",
      [],
      false,
      false,
    ),
  ];
}
