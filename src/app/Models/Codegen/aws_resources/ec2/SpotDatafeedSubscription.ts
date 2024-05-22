import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SpotDatafeedSubscriptionArgs {
  // The Amazon S3 bucket in which to store the Spot instance data feed.
  bucket?: string;

  // Path of folder inside bucket to place spot pricing data.
  prefix?: string;
}
export class SpotDatafeedSubscription extends Resource {
  // The Amazon S3 bucket in which to store the Spot instance data feed.
  public bucket?: string;

  // Path of folder inside bucket to place spot pricing data.
  public prefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The Amazon S3 bucket in which to store the Spot instance data feed.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "prefix",
        "Path of folder inside bucket to place spot pricing data.",
        [],
        false,
        true,
      ),
    ];
  }
}
