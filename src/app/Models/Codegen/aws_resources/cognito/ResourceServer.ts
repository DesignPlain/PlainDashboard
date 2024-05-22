import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cognito_ResourceServerScope,
  cognito_ResourceServerScope_GetTypes,
} from "../types/cognito_ResourceServerScope";

export interface ResourceServerArgs {
  // An identifier for the resource server.
  identifier?: string;

  // A name for the resource server.
  name?: string;

  // A list of Authorization Scope.
  scopes?: Array<cognito_ResourceServerScope>;

  // User pool the client belongs to.
  userPoolId?: string;
}
export class ResourceServer extends Resource {
  // User pool the client belongs to.
  public userPoolId?: string;

  // An identifier for the resource server.
  public identifier?: string;

  // A name for the resource server.
  public name?: string;

  // A list of all scopes configured for this resource server in the format identifier/scope_name.
  public scopeIdentifiers?: Array<string>;

  // A list of Authorization Scope.
  public scopes?: Array<cognito_ResourceServerScope>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "identifier",
        "An identifier for the resource server.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for the resource server.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "scopes",
        "A list of Authorization Scope.",
        cognito_ResourceServerScope_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userPoolId",
        "User pool the client belongs to.",
        [],
        true,
        true,
      ),
    ];
  }
}
