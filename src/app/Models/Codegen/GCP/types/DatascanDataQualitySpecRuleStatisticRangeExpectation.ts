export interface DatascanDataQualitySpecRuleStatisticRangeExpectation {
  /*
Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.
Only relevant if a minValue has been defined. Default = false.
*/
  StrictMinEnabled?: boolean;

  /*
The maximum column statistic value allowed for a row to pass this validation.
At least one of minValue and maxValue need to be provided.
*/
  MaxValue?: string;

  /*
The minimum column statistic value allowed for a row to pass this validation.
At least one of minValue and maxValue need to be provided.
*/
  MinValue?: string;

  /*
column statistics.
Possible values are: `STATISTIC_UNDEFINED`, `MEAN`, `MIN`, `MAX`.
*/
  Statistic?: string;

  /*
Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
Only relevant if a maxValue has been defined. Default = false.
*/
  StrictMaxEnabled?: boolean;
}
