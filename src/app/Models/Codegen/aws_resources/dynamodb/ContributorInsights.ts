import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ContributorInsightsArgs {
  // The global secondary index name
  indexName?: string;

  // The name of the table to enable contributor insights
  tableName?: string;
}
export class ContributorInsights extends Resource {
  // The global secondary index name
  public indexName?: string;

  // The name of the table to enable contributor insights
  public tableName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "indexName",
        "The global secondary index name",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableName",
        "The name of the table to enable contributor insights",
        [],
        true,
        true,
      ),
    ];
  }
}
