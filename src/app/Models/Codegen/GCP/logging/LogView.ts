import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LogViewArgs {
  /*
The bucket of the resource


- - -
*/
  Bucket?: string;

  // Describes this view.
  Description?: string;

  // Filter that restricts which log entries in a bucket are visible in this view. Filters are restricted to be a logical AND of ==/!= of any of the following: - originating project/folder/organization/billing account. - resource type - log id For example: SOURCE("projects/myproject") AND resource.type = "gce_instance" AND LOG_ID("stdout")
  Filter?: string;

  // The location of the resource. The supported locations are: global, us-central1, us-east1, us-west1, asia-east1, europe-west1.
  Location?: string;

  // The resource name of the view. For example: \`projects/my-project/locations/global/buckets/my-bucket/views/my-view\`
  Name?: string;

  // The parent of the resource.
  Parent?: string;
}
export class LogView extends Resource {
  /*
The bucket of the resource


- - -
*/
  public Bucket?: string;

  // Output only. The creation timestamp of the view.
  public CreateTime?: string;

  // Describes this view.
  public Description?: string;

  // Filter that restricts which log entries in a bucket are visible in this view. Filters are restricted to be a logical AND of ==/!= of any of the following: - originating project/folder/organization/billing account. - resource type - log id For example: SOURCE("projects/myproject") AND resource.type = "gce_instance" AND LOG_ID("stdout")
  public Filter?: string;

  // The location of the resource. The supported locations are: global, us-central1, us-east1, us-west1, asia-east1, europe-west1.
  public Location?: string;

  // The resource name of the view. For example: \`projects/my-project/locations/global/buckets/my-bucket/views/my-view\`
  public Name?: string;

  // The parent of the resource.
  public Parent?: string;

  // Output only. The last update timestamp of the view.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Filter",
        'Filter that restricts which log entries in a bucket are visible in this view. Filters are restricted to be a logical AND of ==/!= of any of the following: - originating project/folder/organization/billing account. - resource type - log id For example: SOURCE("projects/myproject") AND resource.type = "gce_instance" AND LOG_ID("stdout")',
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource. The supported locations are: global, us-central1, us-east1, us-west1, asia-east1, europe-west1.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource name of the view. For example: \\`projects/my-project/locations/global/buckets/my-bucket/views/my-view\\`",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Bucket",
        "The bucket of the resource\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Describes this view.",
      ),
    ];
  }
}
