import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface NamedQueryArgs {
  // Plain language name for the query. Maximum length of 128.
  name?: string;

  // Text of the query itself. In other words, all query statements. Maximum length of 262144.
  query?: string;

  // Workgroup to which the query belongs. Defaults to `primary`
  workgroup?: string;

  // Database to which the query belongs.
  database?: string;

  // Brief explanation of the query. Maximum length of 1024.
  description?: string;
}
export class NamedQuery extends Resource {
  // Workgroup to which the query belongs. Defaults to `primary`
  public workgroup?: string;

  // Database to which the query belongs.
  public database?: string;

  // Brief explanation of the query. Maximum length of 1024.
  public description?: string;

  // Plain language name for the query. Maximum length of 128.
  public name?: string;

  // Text of the query itself. In other words, all query statements. Maximum length of 262144.
  public query?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Plain language name for the query. Maximum length of 128.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "query",
        "Text of the query itself. In other words, all query statements. Maximum length of 262144.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workgroup",
        "Workgroup to which the query belongs. Defaults to `primary`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "database",
        "Database to which the query belongs.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Brief explanation of the query. Maximum length of 1024.",
        [],
        false,
        true,
      ),
    ];
  }
}
