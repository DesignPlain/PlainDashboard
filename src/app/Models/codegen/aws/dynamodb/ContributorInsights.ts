import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ContributorInsightsArgs {
  // The name of the table to enable contributor insights
  tableName?: string;

  // The global secondary index name
  indexName?: string;
}
export class ContributorInsights extends DS_Resource {
  // The global secondary index name
  public indexName?: string;

  // The name of the table to enable contributor insights
  public tableName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "tableName",
        "The name of the table to enable contributor insights",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "indexName",
        "The global secondary index name",
        () => [],
        false,
        true,
      ),
    ];
  }
}
