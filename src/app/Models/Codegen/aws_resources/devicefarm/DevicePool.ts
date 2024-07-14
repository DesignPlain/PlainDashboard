import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  devicefarm_DevicePoolRule,
  devicefarm_DevicePoolRule_GetTypes,
} from "../types/devicefarm_DevicePoolRule";

export interface DevicePoolArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The device pool's description.
  description?: string;

  // The number of devices that Device Farm can add to your device pool.
  maxDevices?: number;

  // The name of the Device Pool
  name?: string;

  // The ARN of the project for the device pool.
  projectArn?: string;

  // The device pool's rules. See Rule.
  rules?: Array<devicefarm_DevicePoolRule>;
}
export class DevicePool extends Resource {
  // The Amazon Resource Name of this Device Pool
  public arn?: string;

  // The device pool's description.
  public description?: string;

  // The number of devices that Device Farm can add to your device pool.
  public maxDevices?: number;

  // The name of the Device Pool
  public name?: string;

  // The device pool's rules. See Rule.
  public rules?: Array<devicefarm_DevicePoolRule>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the project for the device pool.
  public projectArn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "The device pool's rules. See Rule.",
        devicefarm_DevicePoolRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The device pool's description.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxDevices",
        "The number of devices that Device Farm can add to your device pool.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Device Pool",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectArn",
        "The ARN of the project for the device pool.",
        [],
        true,
        false,
      ),
    ];
  }
}
