import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ApiKeyRestrictions } from "../types/ApiKeyRestrictions";

export interface ApiKeyArgs {
  // Human-readable display name of this API key. Modifiable by user.
  DisplayName?: string;

  // The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.
  Name?: string;

  // The project for the resource
  Project?: string;

  // Key restrictions.
  Restrictions?: ApiKeyRestrictions;
}
export class ApiKey extends Resource {
  // Key restrictions.
  public Restrictions?: ApiKeyRestrictions;

  // Output only. Unique id in UUID4 format.
  public Uid?: string;

  // Human-readable display name of this API key. Modifiable by user.
  public DisplayName?: string;

  // Output only. An encrypted and signed value held by this key. This field can be accessed only through the `GetKeyString` method.
  public KeyString?: string;

  // The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.
  public Name?: string;

  // The project for the resource
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable display name of this API key. Modifiable by user.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the key. The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `a-z?`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(InputType.String, "Restrictions", "Key restrictions."),
    ];
  }
}
