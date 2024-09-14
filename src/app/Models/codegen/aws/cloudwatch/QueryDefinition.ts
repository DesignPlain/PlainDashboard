import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface QueryDefinitionArgs {
  // Specific log groups to use with the query.
  logGroupNames?: Array<string>;

  // The name of the query.
  name?: string;

  // The query to save. You can read more about CloudWatch Logs Query Syntax in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).
  queryString?: string;
}
export class QueryDefinition extends DS_Resource {
  // Specific log groups to use with the query.
  public logGroupNames?: Array<string>;

  // The name of the query.
  public name?: string;

  // The query definition ID.
  public queryDefinitionId?: string;

  // The query to save. You can read more about CloudWatch Logs Query Syntax in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).
  public queryString?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "logGroupNames",
        "Specific log groups to use with the query.",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the query.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "queryString",
        "The query to save. You can read more about CloudWatch Logs Query Syntax in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).",
        () => [],
        true,
        false,
      ),
    ];
  }
}
