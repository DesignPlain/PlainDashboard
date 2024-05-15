import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TagKeyArgs {
  // User-assigned description of the TagKey. Must not exceed 256 characters.
  Description?: string;

  // Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}.
  Parent?: string;

  /*
Optional. A purpose cannot be changed once set.
A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag.
Possible values are: `GCE_FIREWALL`.
*/
  Purpose?: string;

  /*
Optional. Purpose data cannot be changed once set.
Purpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: `network = "<project-name>/<vpc-name>"`.
*/
  PurposeData?: Map<string, string>;

  /*
Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.
The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.


- - -
*/
  ShortName?: string;
}
export class TagKey extends Resource {
  // User-assigned description of the TagKey. Must not exceed 256 characters.
  public Description?: string;

  // Output only. Namespaced name of the TagKey.
  public NamespacedName?: string;

  /*
Optional. Purpose data cannot be changed once set.
Purpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: `network = "<project-name>/<vpc-name>"`.
*/
  public PurposeData?: Map<string, string>;

  /*
Output only. Update time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
Output only. Creation time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // The generated numeric id for the TagKey.
  public Name?: string;

  // Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}.
  public Parent?: string;

  /*
Optional. A purpose cannot be changed once set.
A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag.
Possible values are: `GCE_FIREWALL`.
*/
  public Purpose?: string;

  /*
Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.
The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.


- - -
*/
  public ShortName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-assigned description of the TagKey. Must not exceed 256 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Purpose",
        "Optional. A purpose cannot be changed once set.\nA purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag.\nPossible values are: `GCE_FIREWALL`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "PurposeData",
        'Optional. Purpose data cannot be changed once set.\nPurpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: `network = "<project-name>/<vpc-name>"`.',
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ShortName",
        "Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.\nThe short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
