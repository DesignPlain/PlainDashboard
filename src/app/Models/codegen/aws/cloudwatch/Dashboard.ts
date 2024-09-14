import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface DashboardArgs {
  // The name of the dashboard.
  dashboardName?: string;

  // The detailed information about the dashboard, including what widgets are included and their location on the dashboard. You can read more about the body structure in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html).
  dashboardBody?: string;
}
export class Dashboard extends DS_Resource {
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
        "dashboardName",
        "The name of the dashboard.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dashboardBody",
        "The detailed information about the dashboard, including what widgets are included and their location on the dashboard. You can read more about the body structure in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html).",
        () => [],
        true,
        false,
      ),
    ];
  }
}
