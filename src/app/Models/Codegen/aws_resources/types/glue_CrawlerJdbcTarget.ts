import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_CrawlerJdbcTarget {
  // The path of the JDBC target.
  path?: string;

  // The name of the connection to use to connect to the JDBC target.
  connectionName?: string;

  // Specify a value of `RAWTYPES` or `COMMENTS` to enable additional metadata intable responses. `RAWTYPES` provides the native-level datatype. `COMMENTS` provides comments associated with a column or table in the database.
  enableAdditionalMetadatas?: Array<string>;

  // A list of glob patterns used to exclude from the crawl.
  exclusions?: Array<string>;
}

export function glue_CrawlerJdbcTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "The path of the JDBC target.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "The name of the connection to use to connect to the JDBC target.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "enableAdditionalMetadatas",
      "Specify a value of `RAWTYPES` or `COMMENTS` to enable additional metadata intable responses. `RAWTYPES` provides the native-level datatype. `COMMENTS` provides comments associated with a column or table in the database.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exclusions",
      "A list of glob patterns used to exclude from the crawl.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
