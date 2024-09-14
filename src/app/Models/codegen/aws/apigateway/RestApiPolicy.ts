import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface RestApiPolicyArgs {
  // JSON formatted policy document that controls access to the API Gateway.
  policy?: string;

  // ID of the REST API.
  restApiId?: string;
}
export class RestApiPolicy extends DS_Resource {
  // JSON formatted policy document that controls access to the API Gateway.
  public policy?: string;

  // ID of the REST API.
  public restApiId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "JSON formatted policy document that controls access to the API Gateway.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApiId",
        "ID of the REST API.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
