import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_CrawlerMongodbTarget {
  // The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.
  connectionName?: string;

  // The path of the Amazon DocumentDB or MongoDB target (database/collection).
  path?: string;

  // Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table. Default value is `true`.
  scanAll?: boolean;
}

export function glue_CrawlerMongodbTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "connectionName",
      "The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The path of the Amazon DocumentDB or MongoDB target (database/collection).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "scanAll",
      "Indicates whether to scan all the records, or to sample rows from the table. Scanning all the records can take a long time when the table is not a high throughput table. Default value is `true`.",
      [],
      false,
      false,
    ),
  ];
}
