import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CatalogArgs {
  /*
The name of the Catalog. Format:
projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The geographic location where the Catalog should reside.
  Location?: string;
}
export class Catalog extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Output only. The last modification time of the catalog. A timestamp in
RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits.
*/
  public UpdateTime?: string;

  /*
Output only. The creation time of the catalog. A timestamp in RFC3339 UTC
"Zulu" format, with nanosecond resolution and up to nine fractional
digits.
*/
  public CreateTime?: string;

  /*
Output only. The deletion time of the catalog. Only set after the catalog
is deleted. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  public DeleteTime?: string;

  /*
Output only. The time when this catalog is considered expired. Only set
after the catalog is deleted. Only set after the catalog is deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits.
*/
  public ExpireTime?: string;

  // The geographic location where the Catalog should reside.
  public Location?: string;

  /*
The name of the Catalog. Format:
projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}


- - -
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the Catalog. Format:\nprojects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location where the Catalog should reside.",
      ),
    ];
  }
}
