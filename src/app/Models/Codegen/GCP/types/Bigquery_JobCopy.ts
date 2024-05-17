import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_JobCopyDestinationEncryptionConfiguration,
  Bigquery_JobCopyDestinationEncryptionConfiguration_GetTypes,
} from "./Bigquery_JobCopyDestinationEncryptionConfiguration";
import {
  Bigquery_JobCopyDestinationTable,
  Bigquery_JobCopyDestinationTable_GetTypes,
} from "./Bigquery_JobCopyDestinationTable";
import {
  Bigquery_JobCopySourceTable,
  Bigquery_JobCopySourceTable_GetTypes,
} from "./Bigquery_JobCopySourceTable";

export interface Bigquery_JobCopy {
  /*
Specifies whether the job is allowed to create new tables. The following values are supported:
CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.
CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.
Creation, truncation and append actions occur as one atomic update upon job completion
Default value is `CREATE_IF_NEEDED`.
Possible values are: `CREATE_IF_NEEDED`, `CREATE_NEVER`.
*/
  CreateDisposition?: string;

  /*
Custom encryption configuration (e.g., Cloud KMS keys)
Structure is documented below.
*/
  DestinationEncryptionConfiguration?: Bigquery_JobCopyDestinationEncryptionConfiguration;

  /*
The destination table.
Structure is documented below.
*/
  DestinationTable?: Bigquery_JobCopyDestinationTable;

  /*
Source tables to copy.
Structure is documented below.
*/
  SourceTables?: Array<Bigquery_JobCopySourceTable>;

  /*
Specifies the action that occurs if the destination table already exists. The following values are supported:
WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.
WRITE_APPEND: If the table already exists, BigQuery appends the data to the table.
WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.
Each action is atomic and only occurs if BigQuery is able to complete the job successfully.
Creation, truncation and append actions occur as one atomic update upon job completion.
Default value is `WRITE_EMPTY`.
Possible values are: `WRITE_TRUNCATE`, `WRITE_APPEND`, `WRITE_EMPTY`.
*/
  WriteDisposition?: string;
}

export function Bigquery_JobCopy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "WriteDisposition",
      "Specifies the action that occurs if the destination table already exists. The following values are supported:\nWRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result.\nWRITE_APPEND: If the table already exists, BigQuery appends the data to the table.\nWRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result.\nEach action is atomic and only occurs if BigQuery is able to complete the job successfully.\nCreation, truncation and append actions occur as one atomic update upon job completion.\nDefault value is `WRITE_EMPTY`.\nPossible values are: `WRITE_TRUNCATE`, `WRITE_APPEND`, `WRITE_EMPTY`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateDisposition",
      "Specifies whether the job is allowed to create new tables. The following values are supported:\nCREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table.\nCREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result.\nCreation, truncation and append actions occur as one atomic update upon job completion\nDefault value is `CREATE_IF_NEEDED`.\nPossible values are: `CREATE_IF_NEEDED`, `CREATE_NEVER`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DestinationEncryptionConfiguration",
      "Custom encryption configuration (e.g., Cloud KMS keys)\nStructure is documented below.",
      Bigquery_JobCopyDestinationEncryptionConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DestinationTable",
      "The destination table.\nStructure is documented below.",
      Bigquery_JobCopyDestinationTable_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "SourceTables",
      "Source tables to copy.\nStructure is documented below.",
      Bigquery_JobCopySourceTable_GetTypes(),
      true,
      true,
    ),
  ];
}
