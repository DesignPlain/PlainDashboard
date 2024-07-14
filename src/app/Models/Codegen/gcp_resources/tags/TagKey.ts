import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TagKeyArgs {
  // User-assigned description of the TagKey. Must not exceed 256 characters.
  description?: string;

  // Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}.
  parent?: string;

  /*
Optional. A purpose cannot be changed once set.
A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag.
Possible values are: `GCE_FIREWALL`.
*/
  purpose?: string;

  /*
Optional. Purpose data cannot be changed once set.
Purpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: `network = "<project-name>/<vpc-name>"`.
*/
  purposeData?: Map<string, string>;

  /*
Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.
The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.


- - -
*/
  shortName?: string;
}
export class TagKey extends Resource {
  /*
Output only. Creation time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  // User-assigned description of the TagKey. Must not exceed 256 characters.
  public description?: string;

  /*
Output only. Update time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
Optional. Purpose data cannot be changed once set.
Purpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: `network = "<project-name>/<vpc-name>"`.
*/
  public purposeData?: Map<string, string>;

  /*
Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.
The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.


- - -
*/
  public shortName?: string;

  // The generated numeric id for the TagKey.
  public name?: string;

  // Output only. Namespaced name of the TagKey.
  public namespacedName?: string;

  // Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}.
  public parent?: string;

  /*
Optional. A purpose cannot be changed once set.
A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag.
Possible values are: `GCE_FIREWALL`.
*/
  public purpose?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-assigned description of the TagKey. Must not exceed 256 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "purpose",
        "Optional. A purpose cannot be changed once set.\nA purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag.\nPossible values are: `GCE_FIREWALL`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "purposeData",
        'Optional. Purpose data cannot be changed once set.\nPurpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: `network = "<project-name>/<vpc-name>"`.',
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "shortName",
        "Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.\nThe short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
