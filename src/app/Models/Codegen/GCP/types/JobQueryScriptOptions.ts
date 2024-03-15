export interface JobQueryScriptOptions {
  /*
Determines which statement in the script represents the "key result",
used to populate the schema and query results of the script job.
Possible values are: `LAST`, `FIRST_SELECT`.
*/
  KeyResultStatement?: string;

  // Limit on the number of bytes billed per statement. Exceeding this budget results in an error.
  StatementByteBudget?: string;

  // Timeout period for each statement in a script.
  StatementTimeoutMs?: string;
}
