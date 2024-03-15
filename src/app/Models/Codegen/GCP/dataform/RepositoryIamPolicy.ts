import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RepositoryIamPolicyArgs {
  //
  PolicyData?: string;

  //
  Project?: string;

  //
  Region?: string;

  //
  Repository?: string;
}
export class RepositoryIamPolicy extends Resource {
  //
  public Etag?: string;

  //
  public PolicyData?: string;

  //
  public Project?: string;

  //
  public Region?: string;

  //
  public Repository?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Region", ""),
      new DynamicUIProps(InputType.String, "Repository", ""),
      new DynamicUIProps(InputType.String, "PolicyData", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
    ];
  }
}
