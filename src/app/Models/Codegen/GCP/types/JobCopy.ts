import { JobCopyDestinationTable } from "./JobCopyDestinationTable";
import { JobCopySourceTable } from "./JobCopySourceTable";
import { JobCopyDestinationEncryptionConfiguration } from "./JobCopyDestinationEncryptionConfiguration";

export interface JobCopy {
  /*
The destination table.
Structure is documented below.
*/
  DestinationTable?: JobCopyDestinationTable;

  /*
Source tables to copy.
Structure is documented below.
*/
  SourceTables?: Array<JobCopySourceTable>;

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
  DestinationEncryptionConfiguration?: JobCopyDestinationEncryptionConfiguration;
}
