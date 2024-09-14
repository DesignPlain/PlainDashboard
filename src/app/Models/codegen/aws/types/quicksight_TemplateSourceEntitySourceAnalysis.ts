import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_TemplateSourceEntitySourceAnalysisDataSetReference,
  quicksight_TemplateSourceEntitySourceAnalysisDataSetReference_GetTypes,
} from "./quicksight_TemplateSourceEntitySourceAnalysisDataSetReference";

export interface quicksight_TemplateSourceEntitySourceAnalysis {
  // The Amazon Resource Name (ARN) of the resource.
  arn?: string;

  // A list of dataset references used as placeholders in the template. See data_set_references.
  dataSetReferences?: Array<quicksight_TemplateSourceEntitySourceAnalysisDataSetReference>;
}

export function quicksight_TemplateSourceEntitySourceAnalysis_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the resource.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataSetReferences",
      "A list of dataset references used as placeholders in the template. See data_set_references.",
      () =>
        quicksight_TemplateSourceEntitySourceAnalysisDataSetReference_GetTypes(),
      true,
      false,
    ),
  ];
}
