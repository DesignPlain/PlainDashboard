import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cleanrooms_ConfiguredTableTableReference,
  cleanrooms_ConfiguredTableTableReference_GetTypes,
} from '../types/cleanrooms_ConfiguredTableTableReference';

export interface ConfiguredTableArgs {
  /*
A reference to the AWS Glue table which will be used to create the configured table.
- `table_reference.database_name` - (Required - Forces new resource) - The name of the AWS Glue database which contains the table.
- `table_reference.table_name` - (Required - Forces new resource) - The name of the AWS Glue table which will be used to create the configured table.
*/
  tableReference?: cleanrooms_ConfiguredTableTableReference;

  // Key value pairs which tag the configured table.
  tags?: Map<string, string>;

  // The columns of the references table which will be included in the configured table.
  allowedColumns?: Array<string>;

  // The analysis method for the configured table. The only valid value is currently `DIRECT_QUERY`.
  analysisMethod?: string;

  // A description for the configured table.
  description?: string;

  // The name of the configured table.
  name?: string;
}
export class ConfiguredTable extends DS_Resource {
  // The columns of the references table which will be included in the configured table.
  public allowedColumns?: Array<string>;

  // Key value pairs which tag the configured table.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The analysis method for the configured table. The only valid value is currently `DIRECT_QUERY`.
  public analysisMethod?: string;

  // The ARN of the configured table.
  public arn?: string;

  // The date and time the configured table was created.
  public createTime?: string;

  // A description for the configured table.
  public description?: string;

  // The name of the configured table.
  public name?: string;

  /*
A reference to the AWS Glue table which will be used to create the configured table.
- `table_reference.database_name` - (Required - Forces new resource) - The name of the AWS Glue database which contains the table.
- `table_reference.table_name` - (Required - Forces new resource) - The name of the AWS Glue table which will be used to create the configured table.
*/
  public tableReference?: cleanrooms_ConfiguredTableTableReference;

  // The date and time the configured table was last updated.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'tableReference',
        'A reference to the AWS Glue table which will be used to create the configured table.\n* `table_reference.database_name` - (Required - Forces new resource) - The name of the AWS Glue database which contains the table.\n* `table_reference.table_name` - (Required - Forces new resource) - The name of the AWS Glue table which will be used to create the configured table.',
        () => cleanrooms_ConfiguredTableTableReference_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key value pairs which tag the configured table.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'allowedColumns',
        'The columns of the references table which will be included in the configured table.',
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'analysisMethod',
        'The analysis method for the configured table. The only valid value is currently `DIRECT_QUERY`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description for the configured table.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the configured table.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
