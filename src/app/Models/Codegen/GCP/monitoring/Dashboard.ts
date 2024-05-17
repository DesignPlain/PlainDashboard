import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DashboardArgs {
  /*
The JSON representation of a dashboard, following the format at
https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.
*/
  DashboardJson?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Dashboard extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The JSON representation of a dashboard, following the format at
https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.
*/
  public DashboardJson?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DashboardJson",
        "The JSON representation of a dashboard, following the format at\nhttps://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.",
        [],
        true,
        false,
      ),
    ];
  }
}
