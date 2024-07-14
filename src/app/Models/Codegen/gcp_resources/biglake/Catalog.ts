import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface CatalogArgs {
  // The geographic location where the Catalog should reside.
  location?: string;

  /*
The name of the Catalog. Format:
projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Catalog extends Resource {
  /*
Output only. The time when this catalog is considered expired. Only set
after the catalog is deleted. Only set after the catalog is deleted.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits.
*/
  public expireTime?: string;

  // The geographic location where the Catalog should reside.
  public location?: string;

  /*
The name of the Catalog. Format:
projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Output only. The last modification time of the catalog. A timestamp in
RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits.
*/
  public updateTime?: string;

  /*
Output only. The creation time of the catalog. A timestamp in RFC3339 UTC
"Zulu" format, with nanosecond resolution and up to nine fractional
digits.
*/
  public createTime?: string;

  /*
Output only. The deletion time of the catalog. Only set after the catalog
is deleted. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
resolution and up to nine fractional digits.
*/
  public deleteTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The geographic location where the Catalog should reside.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Catalog. Format:\nprojects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}\n\n\n- - -",
        [],
        false,
        true,
      ),
    ];
  }
}
