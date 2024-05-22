import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition,
  dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition_GetTypes,
} from "./dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition";

export interface dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression {
  /*
A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content.
Structure is documented below.
*/
  condition?: dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition;
}

export function dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content.\nStructure is documented below.",
      dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
