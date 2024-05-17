import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Projects_ApiKeyRestrictions,
  Projects_ApiKeyRestrictions_GetTypes,
} from "../types/Projects_ApiKeyRestrictions";

export interface ApiKeyArgs {
  // Human-readable display name of this API key. Modifiable by user.
  DisplayName?: string;

  // The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.
  Name?: string;

  // The project for the resource
  Project?: string;

  // Key restrictions.
  Restrictions?: Projects_ApiKeyRestrictions;
}
export class ApiKey extends Resource {
  // The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.
  public Name?: string;

  // The project for the resource
  public Project?: string;

  // Key restrictions.
  public Restrictions?: Projects_ApiKeyRestrictions;

  // Output only. Unique id in UUID4 format.
  public Uid?: string;

  // Human-readable display name of this API key. Modifiable by user.
  public DisplayName?: string;

  // Output only. An encrypted and signed value held by this key. This field can be accessed only through the `GetKeyString` method.
  public KeyString?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable display name of this API key. Modifiable by user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Restrictions",
        "Key restrictions.",
        Projects_ApiKeyRestrictions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
