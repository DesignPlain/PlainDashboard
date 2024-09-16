import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DashboardArgs {
  /*
The JSON representation of a dashboard, following the format at
https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.
*/
  dashboardJson?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Dashboard extends DS_Resource {
  /*
The JSON representation of a dashboard, following the format at
https://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.
*/
  public dashboardJson?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'dashboardJson',
        'The JSON representation of a dashboard, following the format at\nhttps://cloud.google.com/monitoring/api/ref_v3/rest/v1/projects.dashboards.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
