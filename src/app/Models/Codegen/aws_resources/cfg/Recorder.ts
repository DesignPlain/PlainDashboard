import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cfg_RecorderRecordingMode,
  cfg_RecorderRecordingMode_GetTypes,
} from "../types/cfg_RecorderRecordingMode";
import {
  cfg_RecorderRecordingGroup,
  cfg_RecorderRecordingGroup_GetTypes,
} from "../types/cfg_RecorderRecordingGroup";

export interface RecorderArgs {
  // Recording mode - see below.
  recordingMode?: cfg_RecorderRecordingMode;

  // Amazon Resource Name (ARN) of the IAM role. Used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account. See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details.
  roleArn?: string;

  // The name of the recorder. Defaults to `default`. Changing it recreates the resource.
  name?: string;

  // Recording group - see below.
  recordingGroup?: cfg_RecorderRecordingGroup;
}
export class Recorder extends Resource {
  // Amazon Resource Name (ARN) of the IAM role. Used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account. See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details.
  public roleArn?: string;

  // The name of the recorder. Defaults to `default`. Changing it recreates the resource.
  public name?: string;

  // Recording group - see below.
  public recordingGroup?: cfg_RecorderRecordingGroup;

  // Recording mode - see below.
  public recordingMode?: cfg_RecorderRecordingMode;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "Amazon Resource Name (ARN) of the IAM role. Used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account. See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the recorder. Defaults to `default`. Changing it recreates the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "recordingGroup",
        "Recording group - see below.",
        cfg_RecorderRecordingGroup_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "recordingMode",
        "Recording mode - see below.",
        cfg_RecorderRecordingMode_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
