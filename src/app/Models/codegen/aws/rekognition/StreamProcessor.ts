import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rekognition_StreamProcessorOutput,
  rekognition_StreamProcessorOutput_GetTypes,
} from "../types/rekognition_StreamProcessorOutput";
import {
  rekognition_StreamProcessorInput,
  rekognition_StreamProcessorInput_GetTypes,
} from "../types/rekognition_StreamProcessorInput";
import {
  rekognition_StreamProcessorRegionsOfInterest,
  rekognition_StreamProcessorRegionsOfInterest_GetTypes,
} from "../types/rekognition_StreamProcessorRegionsOfInterest";
import {
  rekognition_StreamProcessorSettings,
  rekognition_StreamProcessorSettings_GetTypes,
} from "../types/rekognition_StreamProcessorSettings";
import {
  rekognition_StreamProcessorTimeouts,
  rekognition_StreamProcessorTimeouts_GetTypes,
} from "../types/rekognition_StreamProcessorTimeouts";
import {
  rekognition_StreamProcessorDataSharingPreference,
  rekognition_StreamProcessorDataSharingPreference_GetTypes,
} from "../types/rekognition_StreamProcessorDataSharingPreference";
import {
  rekognition_StreamProcessorNotificationChannel,
  rekognition_StreamProcessorNotificationChannel_GetTypes,
} from "../types/rekognition_StreamProcessorNotificationChannel";

export interface StreamProcessorArgs {
  // Optional parameter for label detection stream processors.
  kmsKeyId?: string;

  // The name of the Stream Processor.
  name?: string;

  // Specifies locations in the frames where Amazon Rekognition checks for objects or people. See `regions_of_interest`.
  regionsOfInterests?: Array<rekognition_StreamProcessorRegionsOfInterest>;

  /*
Input parameters used in a streaming video analyzed by a stream processor. See `settings`.

The following arguments are optional:
*/
  settings?: rekognition_StreamProcessorSettings;

  //
  timeouts?: rekognition_StreamProcessorTimeouts;

  // See `data_sharing_preference`.
  dataSharingPreference?: rekognition_StreamProcessorDataSharingPreference;

  // The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status. See `notification_channel`.
  notificationChannel?: rekognition_StreamProcessorNotificationChannel;

  // Kinesis data stream stream or Amazon S3 bucket location to which Amazon Rekognition Video puts the analysis results. See `output`.
  output?: rekognition_StreamProcessorOutput;

  // The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. The IAM role provides Rekognition read permissions for a Kinesis stream. It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.
  roleArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Input video stream. See `input`.
  input?: rekognition_StreamProcessorInput;
}
export class StreamProcessor extends DS_Resource {
  // Input video stream. See `input`.
  public input?: rekognition_StreamProcessorInput;

  // Optional parameter for label detection stream processors.
  public kmsKeyId?: string;

  // The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status. See `notification_channel`.
  public notificationChannel?: rekognition_StreamProcessorNotificationChannel;

  // Kinesis data stream stream or Amazon S3 bucket location to which Amazon Rekognition Video puts the analysis results. See `output`.
  public output?: rekognition_StreamProcessorOutput;

  // Specifies locations in the frames where Amazon Rekognition checks for objects or people. See `regions_of_interest`.
  public regionsOfInterests?: Array<rekognition_StreamProcessorRegionsOfInterest>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: rekognition_StreamProcessorTimeouts;

  // See `data_sharing_preference`.
  public dataSharingPreference?: rekognition_StreamProcessorDataSharingPreference;

  // The name of the Stream Processor.
  public name?: string;

  // The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. The IAM role provides Rekognition read permissions for a Kinesis stream. It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.
  public roleArn?: string;

  /*
Input parameters used in a streaming video analyzed by a stream processor. See `settings`.

The following arguments are optional:
*/
  public settings?: rekognition_StreamProcessorSettings;

  // ARN of the Stream Processor.
  public streamProcessorArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Stream Processor.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => rekognition_StreamProcessorTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dataSharingPreference",
        "See `data_sharing_preference`.",
        () => rekognition_StreamProcessorDataSharingPreference_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "input",
        "Input video stream. See `input`.",
        () => rekognition_StreamProcessorInput_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "Optional parameter for label detection stream processors.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "regionsOfInterests",
        "Specifies locations in the frames where Amazon Rekognition checks for objects or people. See `regions_of_interest`.",
        () => rekognition_StreamProcessorRegionsOfInterest_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "settings",
        "Input parameters used in a streaming video analyzed by a stream processor. See `settings`.\n\nThe following arguments are optional:",
        () => rekognition_StreamProcessorSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "notificationChannel",
        "The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status. See `notification_channel`.",
        () => rekognition_StreamProcessorNotificationChannel_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "output",
        "Kinesis data stream stream or Amazon S3 bucket location to which Amazon Rekognition Video puts the analysis results. See `output`.",
        () => rekognition_StreamProcessorOutput_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Number (ARN) of the IAM role that allows access to the stream processor. The IAM role provides Rekognition read permissions for a Kinesis stream. It also provides write permissions to an Amazon S3 bucket and Amazon Simple Notification Service topic for a label detection stream processor. This is required for both face search and label detection stream processors.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
