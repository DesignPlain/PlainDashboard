import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface bigquery_TableExternalDataConfigurationGoogleSheetsOptions {
  /*
Range of a sheet to query from. Only used when
non-empty. At least one of `range` or `skip_leading_rows` must be set.
Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id"
For example: "sheet1!A1:B20"
*/
  range?: string;

  /*
The number of rows at the top of the sheet
that BigQuery will skip when reading the data. At least one of `range` or
`skip_leading_rows` must be set.
*/
  skipLeadingRows?: number;
}

export function bigquery_TableExternalDataConfigurationGoogleSheetsOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'range',
      'Range of a sheet to query from. Only used when\nnon-empty. At least one of `range` or `skip_leading_rows` must be set.\nTypical format: "sheet_name!top_left_cell_id:bottom_right_cell_id"\nFor example: "sheet1!A1:B20"',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'skipLeadingRows',
      'The number of rows at the top of the sheet\nthat BigQuery will skip when reading the data. At least one of `range` or\n`skip_leading_rows` must be set.',
      () => [],
      false,
      false,
    ),
  ];
}
