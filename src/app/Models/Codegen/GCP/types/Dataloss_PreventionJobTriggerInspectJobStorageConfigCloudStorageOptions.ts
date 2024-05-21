import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet,
  dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet_GetTypes,
} from "./dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet";

export interface dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions {
  /*
Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.
*/
  filesLimitPercent?: number;

  /*
How to sample bytes if not all bytes are scanned. Meaningful only when used in conjunction with bytesLimitPerFile.
If not specified, scanning would start from the top.
Possible values are: `TOP`, `RANDOM_START`.
*/
  sampleMethod?: string;

  /*
Max number of bytes to scan from a file. If a scanned file's size is bigger than this value
then the rest of the bytes are omitted.
*/
  bytesLimitPerFile?: number;

  /*
Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.
*/
  bytesLimitPerFilePercent?: number;

  /*
Set of files to scan.
Structure is documented below.
*/
  fileSet?: dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet;

  /*
List of file type groups to include in the scan. If empty, all files are scanned and available data
format processors are applied. In addition, the binary content of the selected files is always scanned as well.
Images are scanned only as binary if the specified region does not support image inspection and no fileTypes were specified.
Each value may be one of: `BINARY_FILE`, `TEXT_FILE`, `IMAGE`, `WORD`, `PDF`, `AVRO`, `CSV`, `TSV`, `POWERPOINT`, `EXCEL`.
*/
  fileTypes?: Array<string>;
}

export function dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "filesLimitPercent",
      "Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down.\nMust be between 0 and 100, inclusively. Both 0 and 100 means no limit.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sampleMethod",
      "How to sample bytes if not all bytes are scanned. Meaningful only when used in conjunction with bytesLimitPerFile.\nIf not specified, scanning would start from the top.\nPossible values are: `TOP`, `RANDOM_START`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bytesLimitPerFile",
      "Max number of bytes to scan from a file. If a scanned file's size is bigger than this value\nthen the rest of the bytes are omitted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bytesLimitPerFilePercent",
      "Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down.\nMust be between 0 and 100, inclusively. Both 0 and 100 means no limit.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "fileSet",
      "Set of files to scan.\nStructure is documented below.",
      dataloss_PreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "fileTypes",
      "List of file type groups to include in the scan. If empty, all files are scanned and available data\nformat processors are applied. In addition, the binary content of the selected files is always scanned as well.\nImages are scanned only as binary if the specified region does not support image inspection and no fileTypes were specified.\nEach value may be one of: `BINARY_FILE`, `TEXT_FILE`, `IMAGE`, `WORD`, `PDF`, `AVRO`, `CSV`, `TSV`, `POWERPOINT`, `EXCEL`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
