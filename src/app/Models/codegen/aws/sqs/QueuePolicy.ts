import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface QueuePolicyArgs {
  // The JSON policy for the SQS queue.
  policy?: string;

  // The URL of the SQS Queue to which to attach the policy
  queueUrl?: string;
}
export class QueuePolicy extends DS_Resource {
  // The URL of the SQS Queue to which to attach the policy
  public queueUrl?: string;

  // The JSON policy for the SQS queue.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "queueUrl",
        "The URL of the SQS Queue to which to attach the policy",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The JSON policy for the SQS queue.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
