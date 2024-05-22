import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RequestValidatorArgs {
  // Name of the request validator
  name?: string;

  // ID of the associated Rest API
  restApi?: string;

  // Boolean whether to validate request body. Defaults to `false`.
  validateRequestBody?: boolean;

  // Boolean whether to validate request parameters. Defaults to `false`.
  validateRequestParameters?: boolean;
}
export class RequestValidator extends Resource {
  // Boolean whether to validate request parameters. Defaults to `false`.
  public validateRequestParameters?: boolean;

  // Name of the request validator
  public name?: string;

  // ID of the associated Rest API
  public restApi?: string;

  // Boolean whether to validate request body. Defaults to `false`.
  public validateRequestBody?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "validateRequestParameters",
        "Boolean whether to validate request parameters. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the request validator",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApi",
        "ID of the associated Rest API",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "validateRequestBody",
        "Boolean whether to validate request body. Defaults to `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
