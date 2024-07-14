import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ivs_RecordingConfigurationDestinationConfiguration,
  ivs_RecordingConfigurationDestinationConfiguration_GetTypes,
} from "../types/ivs_RecordingConfigurationDestinationConfiguration";
import {
  ivs_RecordingConfigurationThumbnailConfiguration,
  ivs_RecordingConfigurationThumbnailConfiguration_GetTypes,
} from "../types/ivs_RecordingConfigurationThumbnailConfiguration";

export interface RecordingConfigurationArgs {
  // Object containing destination configuration for where recorded video will be stored.
  destinationConfiguration?: ivs_RecordingConfigurationDestinationConfiguration;

  // Recording Configuration name.
  name?: string;

  // If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together.
  recordingReconnectWindowSeconds?: number;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Object containing information to enable/disable the recording of thumbnails for a live session and modify the interval at which thumbnails are generated for the live session.
  thumbnailConfiguration?: ivs_RecordingConfigurationThumbnailConfiguration;
}
export class RecordingConfiguration extends Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Object containing information to enable/disable the recording of thumbnails for a live session and modify the interval at which thumbnails are generated for the live session.
  public thumbnailConfiguration?: ivs_RecordingConfigurationThumbnailConfiguration;

  // ARN of the Recording Configuration.
  public arn?: string;

  // Object containing destination configuration for where recorded video will be stored.
  public destinationConfiguration?: ivs_RecordingConfigurationDestinationConfiguration;

  // Recording Configuration name.
  public name?: string;

  // If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together.
  public recordingReconnectWindowSeconds?: number;

  // The current state of the Recording Configuration.
  public state?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Recording Configuration name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "recordingReconnectWindowSeconds",
        "If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "thumbnailConfiguration",
        "Object containing information to enable/disable the recording of thumbnails for a live session and modify the interval at which thumbnails are generated for the live session.",
        ivs_RecordingConfigurationThumbnailConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "destinationConfiguration",
        "Object containing destination configuration for where recorded video will be stored.",
        ivs_RecordingConfigurationDestinationConfiguration_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
