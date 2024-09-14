import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface TypeArgs {
  // GraphQL API ID.
  apiId?: string;

  // The type definition.
  definition?: string;

  // The type format: `SDL` or `JSON`.
  format?: string;
}
export class Type extends DS_Resource {
  // The type definition.
  public definition?: string;

  // The type description.
  public description?: string;

  // The type format: `SDL` or `JSON`.
  public format?: string;

  // The type name.
  public name?: string;

  // GraphQL API ID.
  public apiId?: string;

  // The ARN of the type.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "definition",
        "The type definition.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "format",
        "The type format: `SDL` or `JSON`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "GraphQL API ID.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
