import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RepositoryIamPolicyArgs {
  //
  Region?: string;

  //
  Repository?: string;

  //
  PolicyData?: string;

  //
  Project?: string;
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
      new DynamicUIProps(InputType.String, "Region", "", [], false, true),
      new DynamicUIProps(InputType.String, "Repository", "", [], true, true),
      new DynamicUIProps(InputType.String, "PolicyData", "", [], true, false),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
    ];
  }
}
