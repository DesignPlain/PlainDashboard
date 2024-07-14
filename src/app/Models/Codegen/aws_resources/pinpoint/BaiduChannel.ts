import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface BaiduChannelArgs {
  // Platform credential API key from Baidu.
  apiKey?: string;

  // The application ID.
  applicationId?: string;

  // Specifies whether to enable the channel. Defaults to `true`.
  enabled?: boolean;

  // Platform credential Secret key from Baidu.
  secretKey?: string;
}
export class BaiduChannel extends Resource {
  // Specifies whether to enable the channel. Defaults to `true`.
  public enabled?: boolean;

  // Platform credential Secret key from Baidu.
  public secretKey?: string;

  // Platform credential API key from Baidu.
  public apiKey?: string;

  // The application ID.
  public applicationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "secretKey",
        "Platform credential Secret key from Baidu.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiKey",
        "Platform credential API key from Baidu.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationId",
        "The application ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Specifies whether to enable the channel. Defaults to `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
