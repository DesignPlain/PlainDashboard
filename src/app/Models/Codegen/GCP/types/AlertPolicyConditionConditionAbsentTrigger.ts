export interface AlertPolicyConditionConditionAbsentTrigger {
  /*
The absolute number of time series
that must fail the predicate for the
condition to be triggered.
*/
  Count?: number;

  /*
The percentage of time series that
must fail the predicate for the
condition to be triggered.
*/
  Percent?: number;
}
