import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface LogStreamArgs {
  // The name of the log group under which the log stream is to be created.
  logGroupName?: string;

  // The name of the log stream. Must not be longer than 512 characters and must not contain `:`
  name?: string;
}
export class LogStream extends DS_Resource {
  // The name of the log group under which the log stream is to be created.
  public logGroupName?: string;

  // The name of the log stream. Must not be longer than 512 characters and must not contain `:`
  public name?: string;

  // The Amazon Resource Name (ARN) specifying the log stream.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "logGroupName",
        "The name of the log group under which the log stream is to be created.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the log stream. Must not be longer than 512 characters and must not contain `:`",
        () => [],
        false,
        true,
      ),
    ];
  }
}
