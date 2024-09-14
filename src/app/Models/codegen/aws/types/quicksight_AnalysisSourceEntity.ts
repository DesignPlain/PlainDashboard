import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_AnalysisSourceEntitySourceTemplate,
  quicksight_AnalysisSourceEntitySourceTemplate_GetTypes,
} from "./quicksight_AnalysisSourceEntitySourceTemplate";

export interface quicksight_AnalysisSourceEntity {
  // The source template. See source_template.
  sourceTemplate?: quicksight_AnalysisSourceEntitySourceTemplate;
}

export function quicksight_AnalysisSourceEntity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "sourceTemplate",
      "The source template. See source_template.",
      () => quicksight_AnalysisSourceEntitySourceTemplate_GetTypes(),
      false,
      false,
    ),
  ];
}
