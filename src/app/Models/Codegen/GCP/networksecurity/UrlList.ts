import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UrlListArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // FQDNs and URLs.
  Values?: Array<string>;

  // Free-text description of the resource.
  Description?: string;

  /*
The location of the url lists.


- - -
*/
  Location?: string;

  /*
Short name of the UrlList resource to be created.
This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. 'urlList'.
*/
  Name?: string;
}
export class UrlList extends Resource {
  /*
Short name of the UrlList resource to be created.
This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. 'urlList'.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Output only. Time when the security policy was updated.
A timestamp in RFC3339 UTC 'Zulu' format, with nanosecond resolution and up to nine fractional digits.
Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'.
*/
  public UpdateTime?: string;

  // FQDNs and URLs.
  public Values?: Array<string>;

  /*
Output only. Time when the security policy was created.
A timestamp in RFC3339 UTC 'Zulu' format, with nanosecond resolution and up to nine fractional digits.
Examples: '2014-10-02T15:01:23Z' and '2014-10-02T15:01:23.045123456Z'
*/
  public CreateTime?: string;

  // Free-text description of the resource.
  public Description?: string;

  /*
The location of the url lists.


- - -
*/
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(InputType.DropDown, "Values", "FQDNs and URLs."),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Free-text description of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the url lists.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Short name of the UrlList resource to be created.\nThis value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. 'urlList'.",
      ),
    ];
  }
}
