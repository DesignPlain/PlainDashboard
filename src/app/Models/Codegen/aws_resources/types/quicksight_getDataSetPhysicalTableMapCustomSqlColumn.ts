import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface quicksight_getDataSetPhysicalTableMapCustomSqlColumn {
  //
  name?: string;

  //
  type?: string;
}

export function quicksight_getDataSetPhysicalTableMapCustomSqlColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
  ];
}
