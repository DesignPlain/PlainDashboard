import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  quicksight_DataSetPhysicalTableMapS3Source,
  quicksight_DataSetPhysicalTableMapS3Source_GetTypes,
} from "./quicksight_DataSetPhysicalTableMapS3Source";
import {
  quicksight_DataSetPhysicalTableMapCustomSql,
  quicksight_DataSetPhysicalTableMapCustomSql_GetTypes,
} from "./quicksight_DataSetPhysicalTableMapCustomSql";
import {
  quicksight_DataSetPhysicalTableMapRelationalTable,
  quicksight_DataSetPhysicalTableMapRelationalTable_GetTypes,
} from "./quicksight_DataSetPhysicalTableMapRelationalTable";

export interface quicksight_DataSetPhysicalTableMap {
  // A physical table type for as S3 data source. See s3_source.
  s3Source?: quicksight_DataSetPhysicalTableMapS3Source;

  // A physical table type built from the results of the custom SQL query. See custom_sql.
  customSql?: quicksight_DataSetPhysicalTableMapCustomSql;

  // Key of the physical table map.
  physicalTableMapId?: string;

  // A physical table type for relational data sources. See relational_table.
  relationalTable?: quicksight_DataSetPhysicalTableMapRelationalTable;
}

export function quicksight_DataSetPhysicalTableMap_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "relationalTable",
      "A physical table type for relational data sources. See relational_table.",
      () => quicksight_DataSetPhysicalTableMapRelationalTable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Source",
      "A physical table type for as S3 data source. See s3_source.",
      () => quicksight_DataSetPhysicalTableMapS3Source_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "customSql",
      "A physical table type built from the results of the custom SQL query. See custom_sql.",
      () => quicksight_DataSetPhysicalTableMapCustomSql_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "physicalTableMapId",
      "Key of the physical table map.",
      () => [],
      true,
      false,
    ),
  ];
}
