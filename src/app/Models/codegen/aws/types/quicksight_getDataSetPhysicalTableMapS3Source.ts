import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_getDataSetPhysicalTableMapS3SourceInputColumn,
  quicksight_getDataSetPhysicalTableMapS3SourceInputColumn_GetTypes,
} from "./quicksight_getDataSetPhysicalTableMapS3SourceInputColumn";
import {
  quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting,
  quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting_GetTypes,
} from "./quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting";

export interface quicksight_getDataSetPhysicalTableMapS3Source {
  //
  inputColumns?: Array<quicksight_getDataSetPhysicalTableMapS3SourceInputColumn>;

  //
  uploadSettings?: Array<quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting>;

  //
  dataSourceArn?: string;
}

export function quicksight_getDataSetPhysicalTableMapS3Source_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "inputColumns",
      "",
      () => quicksight_getDataSetPhysicalTableMapS3SourceInputColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "uploadSettings",
      "",
      () =>
        quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "dataSourceArn",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
