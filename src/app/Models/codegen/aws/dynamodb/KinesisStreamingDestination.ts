import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface KinesisStreamingDestinationArgs {
  // The ARN for a Kinesis data stream. This must exist in the same account and region as the DynamoDB table.
  streamArn?: string;

  /*
The name of the DynamoDB table. There
can only be one Kinesis streaming destination for a given DynamoDB table.
*/
  tableName?: string;
}
export class KinesisStreamingDestination extends DS_Resource {
  // The ARN for a Kinesis data stream. This must exist in the same account and region as the DynamoDB table.
  public streamArn?: string;

  /*
The name of the DynamoDB table. There
can only be one Kinesis streaming destination for a given DynamoDB table.
*/
  public tableName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "streamArn",
        "The ARN for a Kinesis data stream. This must exist in the same account and region as the DynamoDB table.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableName",
        "The name of the DynamoDB table. There\ncan only be one Kinesis streaming destination for a given DynamoDB table.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
