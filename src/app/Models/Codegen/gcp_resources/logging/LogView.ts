import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LogViewArgs {
  // The resource name of the view. For example: \`projects/my-project/locations/global/buckets/my-bucket/views/my-view\`
  name?: string;

  // The parent of the resource.
  parent?: string;

  /*
The bucket of the resource


- - -
*/
  bucket?: string;

  // Describes this view.
  description?: string;

  // Filter that restricts which log entries in a bucket are visible in this view. Filters are restricted to be a logical AND of ==/!= of any of the following: - originating project/folder/organization/billing account. - resource type - log id For example: SOURCE("projects/myproject") AND resource.type = "gce_instance" AND LOG_ID("stdout")
  filter?: string;

  // The location of the resource. The supported locations are: global, us-central1, us-east1, us-west1, asia-east1, europe-west1.
  location?: string;
}
export class LogView extends Resource {
  /*
The bucket of the resource


- - -
*/
  public bucket?: string;

  // Output only. The creation timestamp of the view.
  public createTime?: string;

  // Describes this view.
  public description?: string;

  // Filter that restricts which log entries in a bucket are visible in this view. Filters are restricted to be a logical AND of ==/!= of any of the following: - originating project/folder/organization/billing account. - resource type - log id For example: SOURCE("projects/myproject") AND resource.type = "gce_instance" AND LOG_ID("stdout")
  public filter?: string;

  // The location of the resource. The supported locations are: global, us-central1, us-east1, us-west1, asia-east1, europe-west1.
  public location?: string;

  // The resource name of the view. For example: \`projects/my-project/locations/global/buckets/my-bucket/views/my-view\`
  public name?: string;

  // The parent of the resource.
  public parent?: string;

  // Output only. The last update timestamp of the view.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "filter",
        'Filter that restricts which log entries in a bucket are visible in this view. Filters are restricted to be a logical AND of ==/!= of any of the following: - originating project/folder/organization/billing account. - resource type - log id For example: SOURCE("projects/myproject") AND resource.type = "gce_instance" AND LOG_ID("stdout")',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource. The supported locations are: global, us-central1, us-east1, us-west1, asia-east1, europe-west1.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The resource name of the view. For example: \\`projects/my-project/locations/global/buckets/my-bucket/views/my-view\\`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The bucket of the resource\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Describes this view.",
        [],
        false,
        false,
      ),
    ];
  }
}
