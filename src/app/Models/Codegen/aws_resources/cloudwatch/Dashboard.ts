import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DashboardArgs {
  // The detailed information about the dashboard, including what widgets are included and their location on the dashboard. You can read more about the body structure in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html).
  dashboardBody?: string;

  // The name of the dashboard.
  dashboardName?: string;
}
export class Dashboard extends Resource {
  // The Amazon Resource Name (ARN) of the dashboard.
  public dashboardArn?: string;

  // The detailed information about the dashboard, including what widgets are included and their location on the dashboard. You can read more about the body structure in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html).
  public dashboardBody?: string;

  // The name of the dashboard.
  public dashboardName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dashboardBody",
        "The detailed information about the dashboard, including what widgets are included and their location on the dashboard. You can read more about the body structure in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dashboardName",
        "The name of the dashboard.",
        [],
        true,
        true,
      ),
    ];
  }
}
