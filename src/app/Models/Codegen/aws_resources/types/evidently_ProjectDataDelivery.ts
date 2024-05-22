import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  evidently_ProjectDataDeliveryCloudwatchLogs,
  evidently_ProjectDataDeliveryCloudwatchLogs_GetTypes,
} from "./evidently_ProjectDataDeliveryCloudwatchLogs";
import {
  evidently_ProjectDataDeliveryS3Destination,
  evidently_ProjectDataDeliveryS3Destination_GetTypes,
} from "./evidently_ProjectDataDeliveryS3Destination";

export interface evidently_ProjectDataDelivery {
  // A block that defines the CloudWatch Log Group that stores the evaluation events. See below.
  cloudwatchLogs?: evidently_ProjectDataDeliveryCloudwatchLogs;

  // A block that defines the S3 bucket and prefix that stores the evaluation events. See below.
  s3Destination?: evidently_ProjectDataDeliveryS3Destination;
}

export function evidently_ProjectDataDelivery_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "cloudwatchLogs",
      "A block that defines the CloudWatch Log Group that stores the evaluation events. See below.",
      evidently_ProjectDataDeliveryCloudwatchLogs_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3Destination",
      "A block that defines the S3 bucket and prefix that stores the evaluation events. See below.",
      evidently_ProjectDataDeliveryS3Destination_GetTypes(),
      false,
      false,
    ),
  ];
}
