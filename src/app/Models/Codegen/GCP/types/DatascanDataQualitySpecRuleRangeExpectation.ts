export interface DatascanDataQualitySpecRuleRangeExpectation {
  /*
Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.
Only relevant if a maxValue has been defined. Default = false.
*/
  StrictMaxEnabled?: boolean;

  /*
Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.
Only relevant if a minValue has been defined. Default = false.
*/
  StrictMinEnabled?: boolean;

  // The maximum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  MaxValue?: string;

  // The minimum column value allowed for a row to pass this validation. At least one of minValue and maxValue need to be provided.
  MinValue?: string;
}
