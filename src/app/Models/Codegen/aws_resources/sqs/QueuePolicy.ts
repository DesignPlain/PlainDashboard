import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface QueuePolicyArgs {
  // The JSON policy for the SQS queue.
  policy?: string;

  // The URL of the SQS Queue to which to attach the policy
  queueUrl?: string;
}
export class QueuePolicy extends Resource {
  // The JSON policy for the SQS queue.
  public policy?: string;

  // The URL of the SQS Queue to which to attach the policy
  public queueUrl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The JSON policy for the SQS queue.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "queueUrl",
        "The URL of the SQS Queue to which to attach the policy",
        [],
        true,
        true,
      ),
    ];
  }
}
