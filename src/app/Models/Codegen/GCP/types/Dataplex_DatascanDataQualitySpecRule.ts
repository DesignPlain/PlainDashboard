import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataplex_DatascanDataQualitySpecRuleRowConditionExpectation,
  dataplex_DatascanDataQualitySpecRuleRowConditionExpectation_GetTypes,
} from "./dataplex_DatascanDataQualitySpecRuleRowConditionExpectation";
import {
  dataplex_DatascanDataQualitySpecRuleTableConditionExpectation,
  dataplex_DatascanDataQualitySpecRuleTableConditionExpectation_GetTypes,
} from "./dataplex_DatascanDataQualitySpecRuleTableConditionExpectation";
import {
  dataplex_DatascanDataQualitySpecRuleNonNullExpectation,
  dataplex_DatascanDataQualitySpecRuleNonNullExpectation_GetTypes,
} from "./dataplex_DatascanDataQualitySpecRuleNonNullExpectation";
import {
  dataplex_DatascanDataQualitySpecRuleSetExpectation,
  dataplex_DatascanDataQualitySpecRuleSetExpectation_GetTypes,
} from "./dataplex_DatascanDataQualitySpecRuleSetExpectation";
import {
  dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation,
  dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation_GetTypes,
} from "./dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation";
import {
  dataplex_DatascanDataQualitySpecRuleRangeExpectation,
  dataplex_DatascanDataQualitySpecRuleRangeExpectation_GetTypes,
} from "./dataplex_DatascanDataQualitySpecRuleRangeExpectation";
import {
  dataplex_DatascanDataQualitySpecRuleUniquenessExpectation,
  dataplex_DatascanDataQualitySpecRuleUniquenessExpectation_GetTypes,
} from "./dataplex_DatascanDataQualitySpecRuleUniquenessExpectation";
import {
  dataplex_DatascanDataQualitySpecRuleRegexExpectation,
  dataplex_DatascanDataQualitySpecRuleRegexExpectation_GetTypes,
} from "./dataplex_DatascanDataQualitySpecRuleRegexExpectation";

export interface dataplex_DatascanDataQualitySpecRule {
  // Rows with null values will automatically fail a rule, unless ignoreNull is true. In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.
  ignoreNull?: boolean;

  /*
A mutable name for the rule.
The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.
*/
  name?: string;

  /*
ColumnMap rule which evaluates whether each column value matches a specified regex.
Structure is documented below.
*/
  regexExpectation?: dataplex_DatascanDataQualitySpecRuleRegexExpectation;

  /*
Table rule which evaluates whether each row passes the specified condition.
Structure is documented below.
*/
  rowConditionExpectation?: dataplex_DatascanDataQualitySpecRuleRowConditionExpectation;

  /*
Table rule which evaluates whether the provided expression is true.
Structure is documented below.
*/
  tableConditionExpectation?: dataplex_DatascanDataQualitySpecRuleTableConditionExpectation;

  // The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]
  dimension?: string;

  // ColumnMap rule which evaluates whether each column value is null.
  nonNullExpectation?: dataplex_DatascanDataQualitySpecRuleNonNullExpectation;

  /*
ColumnMap rule which evaluates whether each column value is contained by a specified set.
Structure is documented below.
*/
  setExpectation?: dataplex_DatascanDataQualitySpecRuleSetExpectation;

  /*
ColumnAggregate rule which evaluates whether the column aggregate statistic lies between a specified range.
Structure is documented below.
*/
  statisticRangeExpectation?: dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation;

  // The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).
  threshold?: number;

  // The unnested column which this rule is evaluated against.
  column?: string;

  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  description?: string;

  /*
ColumnMap rule which evaluates whether each column value lies between a specified range.
Structure is documented below.
*/
  rangeExpectation?: dataplex_DatascanDataQualitySpecRuleRangeExpectation;

  // Row-level rule which evaluates whether each column value is unique.
  uniquenessExpectation?: dataplex_DatascanDataQualitySpecRuleUniquenessExpectation;
}

export function dataplex_DatascanDataQualitySpecRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "dimension",
      'The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "threshold",
      "The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "uniquenessExpectation",
      "Row-level rule which evaluates whether each column value is unique.",
      dataplex_DatascanDataQualitySpecRuleUniquenessExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "regexExpectation",
      "ColumnMap rule which evaluates whether each column value matches a specified regex.\nStructure is documented below.",
      dataplex_DatascanDataQualitySpecRuleRegexExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "tableConditionExpectation",
      "Table rule which evaluates whether the provided expression is true.\nStructure is documented below.",
      dataplex_DatascanDataQualitySpecRuleTableConditionExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "nonNullExpectation",
      "ColumnMap rule which evaluates whether each column value is null.",
      dataplex_DatascanDataQualitySpecRuleNonNullExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "statisticRangeExpectation",
      "ColumnAggregate rule which evaluates whether the column aggregate statistic lies between a specified range.\nStructure is documented below.",
      dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the rule.\nThe maximum length is 1,024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ignoreNull",
      "Rows with null values will automatically fail a rule, unless ignoreNull is true. In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rowConditionExpectation",
      "Table rule which evaluates whether each row passes the specified condition.\nStructure is documented below.",
      dataplex_DatascanDataQualitySpecRuleRowConditionExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "column",
      "The unnested column which this rule is evaluated against.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A mutable name for the rule.\nThe name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).\nThe maximum length is 63 characters.\nMust start with a letter.\nMust end with a number or a letter.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "setExpectation",
      "ColumnMap rule which evaluates whether each column value is contained by a specified set.\nStructure is documented below.",
      dataplex_DatascanDataQualitySpecRuleSetExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "rangeExpectation",
      "ColumnMap rule which evaluates whether each column value lies between a specified range.\nStructure is documented below.",
      dataplex_DatascanDataQualitySpecRuleRangeExpectation_GetTypes(),
      false,
      false,
    ),
  ];
}
