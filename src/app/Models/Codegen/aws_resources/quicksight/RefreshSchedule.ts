import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_RefreshScheduleSchedule,
  quicksight_RefreshScheduleSchedule_GetTypes,
} from "../types/quicksight_RefreshScheduleSchedule";

export interface RefreshScheduleArgs {
  // AWS account ID.
  awsAccountId?: string;

  // The ID of the dataset.
  dataSetId?: string;

  /*
The [refresh schedule](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RefreshSchedule.html). See schedule

The following arguments are optional:
*/
  schedule?: quicksight_RefreshScheduleSchedule;

  // The ID of the refresh schedule.
  scheduleId?: string;
}
export class RefreshSchedule extends Resource {
  // The ID of the refresh schedule.
  public scheduleId?: string;

  // Amazon Resource Name (ARN) of the refresh schedule.
  public arn?: string;

  // AWS account ID.
  public awsAccountId?: string;

  // The ID of the dataset.
  public dataSetId?: string;

  /*
The [refresh schedule](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RefreshSchedule.html). See schedule

The following arguments are optional:
*/
  public schedule?: quicksight_RefreshScheduleSchedule;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "scheduleId",
        "The ID of the refresh schedule.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataSetId",
        "The ID of the dataset.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "schedule",
        "The [refresh schedule](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RefreshSchedule.html). See schedule\n\nThe following arguments are optional:",
        quicksight_RefreshScheduleSchedule_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
