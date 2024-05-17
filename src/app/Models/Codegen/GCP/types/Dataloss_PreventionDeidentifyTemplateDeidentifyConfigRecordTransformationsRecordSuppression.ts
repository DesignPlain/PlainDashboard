import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression {
  /*
A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content.
Structure is documented below.
*/
  Condition?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppression_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Condition",
      "A condition that when it evaluates to true will result in the record being evaluated to be suppressed from the transformed content.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsRecordSuppressionCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
