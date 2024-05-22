import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cleanrooms_ConfiguredTableTableReference {
  //
  databaseName?: string;

  //
  tableName?: string;
}

export function cleanrooms_ConfiguredTableTableReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "databaseName", "", [], true, true),
    new DynamicUIProps(InputType.String, "tableName", "", [], true, true),
  ];
}
