import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_DatascanDataQualitySpecRuleTableConditionExpectation,
  Dataplex_DatascanDataQualitySpecRuleTableConditionExpectation_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRuleTableConditionExpectation";
import {
  Dataplex_DatascanDataQualitySpecRuleRangeExpectation,
  Dataplex_DatascanDataQualitySpecRuleRangeExpectation_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRuleRangeExpectation";
import {
  Dataplex_DatascanDataQualitySpecRuleRowConditionExpectation,
  Dataplex_DatascanDataQualitySpecRuleRowConditionExpectation_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRuleRowConditionExpectation";
import {
  Dataplex_DatascanDataQualitySpecRuleRegexExpectation,
  Dataplex_DatascanDataQualitySpecRuleRegexExpectation_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRuleRegexExpectation";
import {
  Dataplex_DatascanDataQualitySpecRuleUniquenessExpectation,
  Dataplex_DatascanDataQualitySpecRuleUniquenessExpectation_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRuleUniquenessExpectation";
import {
  Dataplex_DatascanDataQualitySpecRuleSetExpectation,
  Dataplex_DatascanDataQualitySpecRuleSetExpectation_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRuleSetExpectation";
import {
  Dataplex_DatascanDataQualitySpecRuleNonNullExpectation,
  Dataplex_DatascanDataQualitySpecRuleNonNullExpectation_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRuleNonNullExpectation";
import {
  Dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation,
  Dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation_GetTypes,
} from "./Dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation";

export interface Dataplex_DatascanDataQualitySpecRule {
  // The unnested column which this rule is evaluated against.
  Column?: string;

  /*
ColumnMap rule which evaluates whether each column value matches a specified regex.
Structure is documented below.
*/
  RegexExpectation?: Dataplex_DatascanDataQualitySpecRuleRegexExpectation;

  // Row-level rule which evaluates whether each column value is unique.
  UniquenessExpectation?: Dataplex_DatascanDataQualitySpecRuleUniquenessExpectation;

  /*
ColumnMap rule which evaluates whether each column value is contained by a specified set.
Structure is documented below.
*/
  SetExpectation?: Dataplex_DatascanDataQualitySpecRuleSetExpectation;

  /*
Description of the rule.
The maximum length is 1,024 characters.
*/
  Description?: string;

  /*
A mutable name for the rule.
The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.
*/
  Name?: string;

  // ColumnMap rule which evaluates whether each column value is null.
  NonNullExpectation?: Dataplex_DatascanDataQualitySpecRuleNonNullExpectation;

  /*
ColumnAggregate rule which evaluates whether the column aggregate statistic lies between a specified range.
Structure is documented below.
*/
  StatisticRangeExpectation?: Dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation;

  /*
Table rule which evaluates whether the provided expression is true.
Structure is documented below.
*/
  TableConditionExpectation?: Dataplex_DatascanDataQualitySpecRuleTableConditionExpectation;

  // The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).
  Threshold?: number;

  // The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]
  Dimension?: string;

  // Rows with null values will automatically fail a rule, unless ignoreNull is true. In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.
  IgnoreNull?: boolean;

  /*
ColumnMap rule which evaluates whether each column value lies between a specified range.
Structure is documented below.
*/
  RangeExpectation?: Dataplex_DatascanDataQualitySpecRuleRangeExpectation;

  /*
Table rule which evaluates whether each row passes the specified condition.
Structure is documented below.
*/
  RowConditionExpectation?: Dataplex_DatascanDataQualitySpecRuleRowConditionExpectation;
}

export function Dataplex_DatascanDataQualitySpecRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "StatisticRangeExpectation",
      "ColumnAggregate rule which evaluates whether the column aggregate statistic lies between a specified range.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecRuleStatisticRangeExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Threshold",
      "The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RegexExpectation",
      "ColumnMap rule which evaluates whether each column value matches a specified regex.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecRuleRegexExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Description of the rule.\nThe maximum length is 1,024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "NonNullExpectation",
      "ColumnMap rule which evaluates whether each column value is null.",
      Dataplex_DatascanDataQualitySpecRuleNonNullExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RangeExpectation",
      "ColumnMap rule which evaluates whether each column value lies between a specified range.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecRuleRangeExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Column",
      "The unnested column which this rule is evaluated against.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TableConditionExpectation",
      "Table rule which evaluates whether the provided expression is true.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecRuleTableConditionExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Dimension",
      'The dimension a rule belongs to. Results are also aggregated at the dimension level. Supported dimensions are ["COMPLETENESS", "ACCURACY", "CONSISTENCY", "VALIDITY", "UNIQUENESS", "INTEGRITY"]',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RowConditionExpectation",
      "Table rule which evaluates whether each row passes the specified condition.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecRuleRowConditionExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SetExpectation",
      "ColumnMap rule which evaluates whether each column value is contained by a specified set.\nStructure is documented below.",
      Dataplex_DatascanDataQualitySpecRuleSetExpectation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "A mutable name for the rule.\nThe name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).\nThe maximum length is 63 characters.\nMust start with a letter.\nMust end with a number or a letter.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IgnoreNull",
      "Rows with null values will automatically fail a rule, unless ignoreNull is true. In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "UniquenessExpectation",
      "Row-level rule which evaluates whether each column value is unique.",
      Dataplex_DatascanDataQualitySpecRuleUniquenessExpectation_GetTypes(),
      false,
      false,
    ),
  ];
}
