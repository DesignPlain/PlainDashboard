import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dynamodb_TableImportTableInputFormatOptions,
  dynamodb_TableImportTableInputFormatOptions_GetTypes,
} from "./dynamodb_TableImportTableInputFormatOptions";
import {
  dynamodb_TableImportTableS3BucketSource,
  dynamodb_TableImportTableS3BucketSource_GetTypes,
} from "./dynamodb_TableImportTableS3BucketSource";

export interface dynamodb_TableImportTable {
  /*
Type of compression to be used on the input coming from the imported table.
Valid values are `GZIP`, `ZSTD` and `NONE`.
*/
  inputCompressionType?: string;

  /*
The format of the source data.
Valid values are `CSV`, `DYNAMODB_JSON`, and `ION`.
*/
  inputFormat?: string;

  /*
Describe the format options for the data that was imported into the target table.
There is one value, `csv`.
See below.
*/
  inputFormatOptions?: dynamodb_TableImportTableInputFormatOptions;

  /*
Values for the S3 bucket the source file is imported from.
See below.
*/
  s3BucketSource?: dynamodb_TableImportTableS3BucketSource;
}

export function dynamodb_TableImportTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "inputCompressionType",
      "Type of compression to be used on the input coming from the imported table.\nValid values are `GZIP`, `ZSTD` and `NONE`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputFormat",
      "The format of the source data.\nValid values are `CSV`, `DYNAMODB_JSON`, and `ION`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inputFormatOptions",
      "Describe the format options for the data that was imported into the target table.\nThere is one value, `csv`.\nSee below.",
      () => dynamodb_TableImportTableInputFormatOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3BucketSource",
      "Values for the S3 bucket the source file is imported from.\nSee below.",
      () => dynamodb_TableImportTableS3BucketSource_GetTypes(),
      true,
      true,
    ),
  ];
}
