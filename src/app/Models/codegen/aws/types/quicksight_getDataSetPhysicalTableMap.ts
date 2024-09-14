import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_getDataSetPhysicalTableMapRelationalTable,
  quicksight_getDataSetPhysicalTableMapRelationalTable_GetTypes,
} from "./quicksight_getDataSetPhysicalTableMapRelationalTable";
import {
  quicksight_getDataSetPhysicalTableMapS3Source,
  quicksight_getDataSetPhysicalTableMapS3Source_GetTypes,
} from "./quicksight_getDataSetPhysicalTableMapS3Source";
import {
  quicksight_getDataSetPhysicalTableMapCustomSql,
  quicksight_getDataSetPhysicalTableMapCustomSql_GetTypes,
} from "./quicksight_getDataSetPhysicalTableMapCustomSql";

export interface quicksight_getDataSetPhysicalTableMap {
  //
  customSqls?: Array<quicksight_getDataSetPhysicalTableMapCustomSql>;

  //
  physicalTableMapId?: string;

  //
  relationalTables?: Array<quicksight_getDataSetPhysicalTableMapRelationalTable>;

  //
  s3Sources?: Array<quicksight_getDataSetPhysicalTableMapS3Source>;
}

export function quicksight_getDataSetPhysicalTableMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "relationalTables",
      "",
      () => quicksight_getDataSetPhysicalTableMapRelationalTable_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "s3Sources",
      "",
      () => quicksight_getDataSetPhysicalTableMapS3Source_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "customSqls",
      "",
      () => quicksight_getDataSetPhysicalTableMapCustomSql_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "physicalTableMapId",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
