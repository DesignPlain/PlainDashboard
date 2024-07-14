import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  quicksight_DataSetPhysicalTableMapS3SourceInputColumn,
  quicksight_DataSetPhysicalTableMapS3SourceInputColumn_GetTypes,
} from "./quicksight_DataSetPhysicalTableMapS3SourceInputColumn";
import {
  quicksight_DataSetPhysicalTableMapS3SourceUploadSettings,
  quicksight_DataSetPhysicalTableMapS3SourceUploadSettings_GetTypes,
} from "./quicksight_DataSetPhysicalTableMapS3SourceUploadSettings";

export interface quicksight_DataSetPhysicalTableMapS3Source {
  // ARN of the data source.
  dataSourceArn?: string;

  // Column schema of the table. See input_columns.
  inputColumns?: Array<quicksight_DataSetPhysicalTableMapS3SourceInputColumn>;

  // Information about the format for the S3 source file or files. See upload_settings.
  uploadSettings?: quicksight_DataSetPhysicalTableMapS3SourceUploadSettings;
}

export function quicksight_DataSetPhysicalTableMapS3Source_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dataSourceArn",
      "ARN of the data source.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inputColumns",
      "Column schema of the table. See input_columns.",
      quicksight_DataSetPhysicalTableMapS3SourceInputColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uploadSettings",
      "Information about the format for the S3 source file or files. See upload_settings.",
      quicksight_DataSetPhysicalTableMapS3SourceUploadSettings_GetTypes(),
      true,
      false,
    ),
  ];
}
