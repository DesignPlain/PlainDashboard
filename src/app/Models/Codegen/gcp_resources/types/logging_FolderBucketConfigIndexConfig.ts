import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface logging_FolderBucketConfigIndexConfig {
  /*
The LogEntry field path to index.
Note that some paths are automatically indexed, and other paths are not eligible for indexing. See indexing documentation for details.
*/
  fieldPath?: string;

  // The type of data in this index. Allowed types include `INDEX_TYPE_UNSPECIFIED`, `INDEX_TYPE_STRING` and `INDEX_TYPE_INTEGER`.
  type?: string;
}

export function logging_FolderBucketConfigIndexConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fieldPath",
      "The LogEntry field path to index.\nNote that some paths are automatically indexed, and other paths are not eligible for indexing. See indexing documentation for details.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of data in this index. Allowed types include `INDEX_TYPE_UNSPECIFIED`, `INDEX_TYPE_STRING` and `INDEX_TYPE_INTEGER`.",
      [],
      true,
      false,
    ),
  ];
}
