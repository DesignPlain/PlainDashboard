import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_AnalysisSourceEntitySourceTemplateDataSetReference {
  // Dataset placeholder.
  dataSetPlaceholder?: string;

  // Dataset Amazon Resource Name (ARN).
  dataSetArn?: string;
}

export function quicksight_AnalysisSourceEntitySourceTemplateDataSetReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataSetPlaceholder",
      "Dataset placeholder.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataSetArn",
      "Dataset Amazon Resource Name (ARN).",
      [],
      true,
      false,
    ),
  ];
}
