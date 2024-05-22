import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
    new DynamicUIProps(InputType.Bool, "containsHeader", "", [], true, false),
    new DynamicUIProps(InputType.String, "delimiter", "", [], true, false),
    new DynamicUIProps(InputType.String, "format", "", [], true, false),
    new DynamicUIProps(InputType.Number, "startFromRow", "", [], true, false),
    new DynamicUIProps(InputType.String, "textQualifier", "", [], true, false),
  ];
}
