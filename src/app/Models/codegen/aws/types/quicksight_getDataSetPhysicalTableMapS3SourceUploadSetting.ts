import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting {
  //
  containsHeader?: boolean;

  //
  delimiter?: string;

  //
  format?: string;

  //
  startFromRow?: number;

  //
  textQualifier?: string;
}

export function quicksight_getDataSetPhysicalTableMapS3SourceUploadSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "delimiter",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "format", "", () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "startFromRow",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textQualifier",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "containsHeader",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
