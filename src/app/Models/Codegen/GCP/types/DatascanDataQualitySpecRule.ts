import { DatascanDataQualitySpecRuleRegexExpectation } from "./DatascanDataQualitySpecRuleRegexExpectation";
import { DatascanDataQualitySpecRuleUniquenessExpectation } from "./DatascanDataQualitySpecRuleUniquenessExpectation";
import { DatascanDataQualitySpecRuleSetExpectation } from "./DatascanDataQualitySpecRuleSetExpectation";
import { DatascanDataQualitySpecRuleRowConditionExpectation } from "./DatascanDataQualitySpecRuleRowConditionExpectation";
import { DatascanDataQualitySpecRuleStatisticRangeExpectation } from "./DatascanDataQualitySpecRuleStatisticRangeExpectation";
import { DatascanDataQualitySpecRuleTableConditionExpectation } from "./DatascanDataQualitySpecRuleTableConditionExpectation";
import { DatascanDataQualitySpecRuleRangeExpectation } from "./DatascanDataQualitySpecRuleRangeExpectation";
import { DatascanDataQualitySpecRuleNonNullExpectation } from "./DatascanDataQualitySpecRuleNonNullExpectation";

export interface DatascanDataQualitySpecRule {
  // Row-level rule which evaluates whether each column value is unique.
  UniquenessExpectation?: DatascanDataQualitySpecRuleUniquenessExpectation;

  // The unnested column which this rule is evaluated against.
  Column?: string;

  /*
A mutable name for the rule.
The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.
*/
  Name?: string;

  /*
ColumnMap rule which evaluates whether each column value is contained by a specified set.
Structure is documented below.
*/
  SetExpectation?: DatascanDataQualitySpecRuleSetExpectation;

  // The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).
  Threshold?: number;

  /*
Table rule which evaluates whether each row passes the specified condition.
Structure is documented below.
*/
  RowConditionExpectation?: DatascanDataQualitySpecRuleRowConditionExpectation;

  /*
ColumnAggregate rule which evaluates whether the column aggregate statistic lies between a specified range.
Structure is documented below.
*/
  StatisticRangeExpectation?: DatascanDataQualitySpecRuleStatisticRangeExpectation;

  /*
Table rule which evaluates whether the provided expression is true.
Structure is documented below.
*/
  TableConditionExpectation?: DatascanDataQualitySpecRuleTableConditionExpectation;

  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  Description?: string;

  // The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]
  Dimension?: string;

  /*
ColumnMap rule which evaluates whether each column value lies between a specified range.
Structure is documented below.
*/
  RangeExpectation?: DatascanDataQualitySpecRuleRangeExpectation;

  // Rows with null values will automatically fail a rule, unless ignoreNull is true. In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.
  IgnoreNull?: boolean;

  // ColumnMap rule which evaluates whether each column value is null.
  NonNullExpectation?: DatascanDataQualitySpecRuleNonNullExpectation;

  /*
ColumnMap rule which evaluates whether each column value matches a specified regex.
Structure is documented below.
*/
  RegexExpectation?: DatascanDataQualitySpecRuleRegexExpectation;
}
