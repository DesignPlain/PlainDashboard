import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datacatalog_EntryBigqueryTableSpecTableSpec {
  /*
(Output)
If the table is a dated shard, i.e., with name pattern [prefix]YYYYMMDD, groupedEntry is the
Data Catalog resource name of the date sharded grouped entry, for example,
projects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}.
Otherwise, groupedEntry is empty.
*/
  groupedEntry?: string;
}

export function datacatalog_EntryBigqueryTableSpecTableSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "groupedEntry",
      "(Output)\nIf the table is a dated shard, i.e., with name pattern [prefix]YYYYMMDD, groupedEntry is the\nData Catalog resource name of the date sharded grouped entry, for example,\nprojects/{project_id}/locations/{location}/entrygroups/{entryGroupId}/entries/{entryId}.\nOtherwise, groupedEntry is empty.",
      [],
      false,
      false,
    ),
  ];
}
