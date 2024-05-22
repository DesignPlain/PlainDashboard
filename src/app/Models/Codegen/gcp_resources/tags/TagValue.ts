import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TagValueArgs {
  // User-assigned description of the TagValue. Must not exceed 256 characters.
  description?: string;

  // Input only. The resource name of the new TagValue's parent. Must be of the form tagKeys/{tag_key_id}.
  parent?: string;

  /*
Input only. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey.
The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.


- - -
*/
  shortName?: string;
}
export class TagValue extends Resource {
  /*
Output only. Creation time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  // User-assigned description of the TagValue. Must not exceed 256 characters.
  public description?: string;

  // The generated numeric id for the TagValue.
  public name?: string;

  // Output only. Namespaced name of the TagValue. Will be in the format {parentNamespace}/{tagKeyShortName}/{shortName}.
  public namespacedName?: string;

  // Input only. The resource name of the new TagValue's parent. Must be of the form tagKeys/{tag_key_id}.
  public parent?: string;

  /*
Input only. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey.
The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.


- - -
*/
  public shortName?: string;

  /*
Output only. Update time.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-assigned description of the TagValue. Must not exceed 256 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "Input only. The resource name of the new TagValue's parent. Must be of the form tagKeys/{tag_key_id}.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "shortName",
        "Input only. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey.\nThe short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
