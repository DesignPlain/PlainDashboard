import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TypeArgs {
  // GraphQL API ID.
  apiId?: string;

  // The type definition.
  definition?: string;

  // The type format: `SDL` or `JSON`.
  format?: string;
}
export class Type extends Resource {
  // The type name.
  public name?: string;

  // GraphQL API ID.
  public apiId?: string;

  // The ARN of the type.
  public arn?: string;

  // The type definition.
  public definition?: string;

  // The type description.
  public description?: string;

  // The type format: `SDL` or `JSON`.
  public format?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "GraphQL API ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "definition",
        "The type definition.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "format",
        "The type format: `SDL` or `JSON`.",
        [],
        true,
        false,
      ),
    ];
  }
}
