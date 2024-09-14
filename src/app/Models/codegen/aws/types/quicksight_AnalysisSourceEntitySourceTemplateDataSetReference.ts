import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_AnalysisSourceEntitySourceTemplateDataSetReference {
  // Dataset Amazon Resource Name (ARN).
  dataSetArn?: string;

  // Dataset placeholder.
  dataSetPlaceholder?: string;
}

export function quicksight_AnalysisSourceEntitySourceTemplateDataSetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataSetArn",
      "Dataset Amazon Resource Name (ARN).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataSetPlaceholder",
      "Dataset placeholder.",
      () => [],
      true,
      false,
    ),
  ];
}
