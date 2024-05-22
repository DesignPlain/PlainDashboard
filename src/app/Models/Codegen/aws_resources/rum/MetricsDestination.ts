import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface MetricsDestinationArgs {
  // Defines the destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
  destination?: string;

  // Use this parameter only if Destination is Evidently. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
  destinationArn?: string;

  // This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter.
  iamRoleArn?: string;

  // The name of the CloudWatch RUM app monitor that will send the metrics.
  appMonitorName?: string;
}
export class MetricsDestination extends Resource {
  // The name of the CloudWatch RUM app monitor that will send the metrics.
  public appMonitorName?: string;

  // Defines the destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.
  public destination?: string;

  // Use this parameter only if Destination is Evidently. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.
  public destinationArn?: string;

  // This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter.
  public iamRoleArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destination",
        "Defines the destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationArn",
        "Use this parameter only if Destination is Evidently. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamRoleArn",
        "This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "appMonitorName",
        "The name of the CloudWatch RUM app monitor that will send the metrics.",
        [],
        true,
        false,
      ),
    ];
  }
}
