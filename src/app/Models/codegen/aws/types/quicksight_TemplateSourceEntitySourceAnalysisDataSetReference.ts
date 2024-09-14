import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_TemplateSourceEntitySourceAnalysisDataSetReference {
  // Dataset placeholder.
  dataSetPlaceholder?: string;

  // Dataset Amazon Resource Name (ARN).
  dataSetArn?: string;
}

export function quicksight_TemplateSourceEntitySourceAnalysisDataSetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataSetPlaceholder",
      "Dataset placeholder.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataSetArn",
      "Dataset Amazon Resource Name (ARN).",
      () => [],
      true,
      false,
    ),
  ];
}
