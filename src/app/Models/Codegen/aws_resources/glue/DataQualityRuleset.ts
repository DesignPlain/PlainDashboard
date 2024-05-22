import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  glue_DataQualityRulesetTargetTable,
  glue_DataQualityRulesetTargetTable_GetTypes,
} from "../types/glue_DataQualityRulesetTargetTable";

export interface DataQualityRulesetArgs {
  // Description of the data quality ruleset.
  description?: string;

  // Name of the data quality ruleset.
  name?: string;

  // A Data Quality Definition Language (DQDL) ruleset. For more information, see the AWS Glue developer guide.
  ruleset?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A Configuration block specifying a target table associated with the data quality ruleset. See `target_table` below.
  targetTable?: glue_DataQualityRulesetTargetTable;
}
export class DataQualityRuleset extends Resource {
  // ARN of the Glue Data Quality Ruleset.
  public arn?: string;

  // The time and date that this data quality ruleset was created.
  public createdOn?: string;

  // The time and date that this data quality ruleset was created.
  public lastModifiedOn?: string;

  // Name of the data quality ruleset.
  public name?: string;

  // A Configuration block specifying a target table associated with the data quality ruleset. See `target_table` below.
  public targetTable?: glue_DataQualityRulesetTargetTable;

  // Description of the data quality ruleset.
  public description?: string;

  // When a ruleset was created from a recommendation run, this run ID is generated to link the two together.
  public recommendationRunId?: string;

  // A Data Quality Definition Language (DQDL) ruleset. For more information, see the AWS Glue developer guide.
  public ruleset?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the data quality ruleset.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleset",
        "A Data Quality Definition Language (DQDL) ruleset. For more information, see the AWS Glue developer guide.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "targetTable",
        "A Configuration block specifying a target table associated with the data quality ruleset. See `target_table` below.",
        glue_DataQualityRulesetTargetTable_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the data quality ruleset.",
        [],
        false,
        false,
      ),
    ];
  }
}
