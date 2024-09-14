import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface UrlListArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // FQDNs and URLs.
  values?: Array<string>;

  // Free-text description of the resource.
  description?: string;

  /*
The location of the url lists.


- - -
*/
  location?: string;

  /*
Short name of the UrlList resource to be created.
This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. 'urlList'.
*/
  name?: string;
}
export class UrlList extends DS_Resource {
  /*
Short name of the UrlList resource to be created.
This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. 'urlList'.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Output only. Time when the security policy was updated.
A timestamp in RFC3339 UTC 'Zulu' format, with nanosecond resolution and up to nine fractional digits.
Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'.
*/
  public updateTime?: string;

  // FQDNs and URLs.
  public values?: Array<string>;

  /*
Output only. Time when the security policy was created.
A timestamp in RFC3339 UTC 'Zulu' format, with nanosecond resolution and up to nine fractional digits.
Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'
*/
  public createTime?: string;

  // Free-text description of the resource.
  public description?: string;

  /*
The location of the url lists.


- - -
*/
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Free-text description of the resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the url lists.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Short name of the UrlList resource to be created.\nThis value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. 'urlList'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "values",
        "FQDNs and URLs.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
