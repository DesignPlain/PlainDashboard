import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_getDataSetRowLevelPermissionDataSet {
  //
  arn?: string;

  //
  formatVersion?: string;

  //
  namespace?: string;

  //
  permissionPolicy?: string;

  //
  status?: string;
}

export function quicksight_getDataSetRowLevelPermissionDataSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "formatVersion", "", [], true, false),
    new DynamicUIProps(InputType.String, "namespace", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "permissionPolicy",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "status", "", [], true, false),
    new DynamicUIProps(InputType.String, "arn", "", [], true, false),
  ];
}
