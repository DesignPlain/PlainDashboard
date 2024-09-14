import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  controltower_LandingZoneDriftStatus,
  controltower_LandingZoneDriftStatus_GetTypes,
} from "../types/controltower_LandingZoneDriftStatus";

export interface LandingZoneArgs {
  // The landing zone version.
  version?: string;

  // The manifest JSON file is a text file that describes your AWS resources. For examples, review [Launch your landing zone](https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch).
  manifestJson?: string;

  // Tags to apply to the landing zone. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class LandingZone extends DS_Resource {
  // The manifest JSON file is a text file that describes your AWS resources. For examples, review [Launch your landing zone](https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch).
  public manifestJson?: string;

  // Tags to apply to the landing zone. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the landing zone, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The landing zone version.
  public version?: string;

  // The ARN of the landing zone.
  public arn?: string;

  // The drift status summary of the landing zone.
  public driftStatuses?: Array<controltower_LandingZoneDriftStatus>;

  // The latest available version of the landing zone.
  public latestAvailableVersion?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "version",
        "The landing zone version.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "manifestJson",
        "The manifest JSON file is a text file that describes your AWS resources. For examples, review [Launch your landing zone](https://docs.aws.amazon.com/controltower/latest/userguide/lz-api-launch).",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Tags to apply to the landing zone. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
