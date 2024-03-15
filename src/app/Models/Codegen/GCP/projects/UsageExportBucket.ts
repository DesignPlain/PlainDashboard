import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UsageExportBucketArgs {
  // The bucket to store reports in.
  BucketName?: string;

  // A prefix for the reports, for instance, the project name.
  Prefix?: string;

  // The project to set the export bucket on. If it is not provided, the provider project is used.
  Project?: string;
}
export class UsageExportBucket extends Resource {
  // The bucket to store reports in.
  public BucketName?: string;

  // A prefix for the reports, for instance, the project name.
  public Prefix?: string;

  // The project to set the export bucket on. If it is not provided, the provider project is used.
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BucketName",
        "The bucket to store reports in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Prefix",
        "A prefix for the reports, for instance, the project name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project to set the export bucket on. If it is not provided, the provider project is used.",
      ),
    ];
  }
}
