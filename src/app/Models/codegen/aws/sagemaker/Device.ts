import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DeviceDevice,
  sagemaker_DeviceDevice_GetTypes,
} from "../types/sagemaker_DeviceDevice";

export interface DeviceArgs {
  // The device to register with SageMaker Edge Manager. See Device details below.
  device?: sagemaker_DeviceDevice;

  // The name of the Device Fleet.
  deviceFleetName?: string;
}
export class Device extends DS_Resource {
  //
  public agentVersion?: string;

  // The Amazon Resource Name (ARN) assigned by AWS to this Device.
  public arn?: string;

  // The device to register with SageMaker Edge Manager. See Device details below.
  public device?: sagemaker_DeviceDevice;

  // The name of the Device Fleet.
  public deviceFleetName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "device",
        "The device to register with SageMaker Edge Manager. See Device details below.",
        () => sagemaker_DeviceDevice_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deviceFleetName",
        "The name of the Device Fleet.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
