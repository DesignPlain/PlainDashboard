import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  costexplorer_CostCategorySplitChargeRule,
  costexplorer_CostCategorySplitChargeRule_GetTypes,
} from "../types/costexplorer_CostCategorySplitChargeRule";
import {
  costexplorer_CostCategoryRule,
  costexplorer_CostCategoryRule_GetTypes,
} from "../types/costexplorer_CostCategoryRule";

export interface CostCategoryArgs {
  // Configuration block for the split charge rules used to allocate your charges between your Cost Category values. See below.
  splitChargeRules?: Array<costexplorer_CostCategorySplitChargeRule>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Default value for the cost category.
  defaultValue?: string;

  /*
The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future. For example `2022-11-01T00:00:00Z`.

The following arguments are optional:
*/
  effectiveStart?: string;

  // Unique name for the Cost Category.
  name?: string;

  // Rule schema version in this particular Cost Category.
  ruleVersion?: string;

  // Configuration block for the Cost Category rules used to categorize costs. See below.
  rules?: Array<costexplorer_CostCategoryRule>;
}
export class CostCategory extends Resource {
  // Effective end data of your Cost Category.
  public effectiveEnd?: string;

  /*
The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future. For example `2022-11-01T00:00:00Z`.

The following arguments are optional:
*/
  public effectiveStart?: string;

  // Configuration block for the Cost Category rules used to categorize costs. See below.
  public rules?: Array<costexplorer_CostCategoryRule>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the cost category.
  public arn?: string;

  // Default value for the cost category.
  public defaultValue?: string;

  // Unique name for the Cost Category.
  public name?: string;

  // Rule schema version in this particular Cost Category.
  public ruleVersion?: string;

  // Configuration block for the split charge rules used to allocate your charges between your Cost Category values. See below.
  public splitChargeRules?: Array<costexplorer_CostCategorySplitChargeRule>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ruleVersion",
        "Rule schema version in this particular Cost Category.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "Configuration block for the Cost Category rules used to categorize costs. See below.",
        costexplorer_CostCategoryRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "splitChargeRules",
        "Configuration block for the split charge rules used to allocate your charges between your Cost Category values. See below.",
        costexplorer_CostCategorySplitChargeRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultValue",
        "Default value for the cost category.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "effectiveStart",
        "The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future. For example `2022-11-01T00:00:00Z`.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for the Cost Category.",
        [],
        false,
        true,
      ),
    ];
  }
}
