import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface PreparedStatementArgs {
  // The name of the workgroup to which the prepared statement belongs.
  workgroup?: string;

  // Brief explanation of prepared statement. Maximum length of 1024.
  description?: string;

  // The name of the prepared statement. Maximum length of 256.
  name?: string;

  // The query string for the prepared statement.
  queryStatement?: string;
}
export class PreparedStatement extends Resource {
  // The name of the prepared statement. Maximum length of 256.
  public name?: string;

  // The query string for the prepared statement.
  public queryStatement?: string;

  // The name of the workgroup to which the prepared statement belongs.
  public workgroup?: string;

  // Brief explanation of prepared statement. Maximum length of 1024.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the prepared statement. Maximum length of 256.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "queryStatement",
        "The query string for the prepared statement.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workgroup",
        "The name of the workgroup to which the prepared statement belongs.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Brief explanation of prepared statement. Maximum length of 1024.",
        [],
        false,
        false,
      ),
    ];
  }
}
