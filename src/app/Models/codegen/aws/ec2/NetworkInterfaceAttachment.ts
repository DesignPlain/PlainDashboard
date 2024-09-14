import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface NetworkInterfaceAttachmentArgs {
  // Network interface index (int).
  deviceIndex?: number;

  // Instance ID to attach.
  instanceId?: string;

  // ENI ID to attach.
  networkInterfaceId?: string;
}
export class NetworkInterfaceAttachment extends DS_Resource {
  // The ENI Attachment ID.
  public attachmentId?: string;

  // Network interface index (int).
  public deviceIndex?: number;

  // Instance ID to attach.
  public instanceId?: string;

  // ENI ID to attach.
  public networkInterfaceId?: string;

  // The status of the Network Interface Attachment.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "deviceIndex",
        "Network interface index (int).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "Instance ID to attach.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkInterfaceId",
        "ENI ID to attach.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
