import { RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus } from "./RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus";

export interface RepositoryReleaseConfigRecentScheduledReleaseRecord {
  /*
(Output)
The timestamp of this release attempt.
*/
  ReleaseTime?: string;

  /*
(Output)
The name of the created compilation result, if one was successfully created. Must be in the format projects/-/locations/-/repositories/-/compilationResults/-.
*/
  CompilationResult?: string;

  /*
(Output)
The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.
Structure is documented below.
*/
  ErrorStatuses?: Array<RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus>;
}
