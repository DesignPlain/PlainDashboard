import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DashboardSourceEntitySourceTemplateDataSetReference,
  quicksight_DashboardSourceEntitySourceTemplateDataSetReference_GetTypes,
} from "./quicksight_DashboardSourceEntitySourceTemplateDataSetReference";

export interface quicksight_DashboardSourceEntitySourceTemplate {
  // The Amazon Resource Name (ARN) of the resource.
  arn?: string;

  // List of dataset references. See data_set_references.
  dataSetReferences?: Array<quicksight_DashboardSourceEntitySourceTemplateDataSetReference>;
}

export function quicksight_DashboardSourceEntitySourceTemplate_GetTypes(): DynamicUIProps[] {
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
      "List of dataset references. See data_set_references.",
      () =>
        quicksight_DashboardSourceEntitySourceTemplateDataSetReference_GetTypes(),
      true,
      false,
    ),
  ];
}
