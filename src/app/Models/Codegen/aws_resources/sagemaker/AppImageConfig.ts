import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_AppImageConfigJupyterLabImageConfig,
  sagemaker_AppImageConfigJupyterLabImageConfig_GetTypes,
} from "../types/sagemaker_AppImageConfigJupyterLabImageConfig";
import {
  sagemaker_AppImageConfigKernelGatewayImageConfig,
  sagemaker_AppImageConfigKernelGatewayImageConfig_GetTypes,
} from "../types/sagemaker_AppImageConfigKernelGatewayImageConfig";

export interface AppImageConfigArgs {
  // The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app. See Kernel Gateway Image Config details below.
  kernelGatewayImageConfig?: sagemaker_AppImageConfigKernelGatewayImageConfig;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the App Image Config.
  appImageConfigName?: string;

  //
  jupyterLabImageConfig?: sagemaker_AppImageConfigJupyterLabImageConfig;
}
export class AppImageConfig extends Resource {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The name of the App Image Config.
  public appImageConfigName?: string;

  // The Amazon Resource Name (ARN) assigned by AWS to this App Image Config.
  public arn?: string;

  //
  public jupyterLabImageConfig?: sagemaker_AppImageConfigJupyterLabImageConfig;

  // The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app. See Kernel Gateway Image Config details below.
  public kernelGatewayImageConfig?: sagemaker_AppImageConfigKernelGatewayImageConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "kernelGatewayImageConfig",
        "The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app. See Kernel Gateway Image Config details below.",
        sagemaker_AppImageConfigKernelGatewayImageConfig_GetTypes(),
        false,
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
        "appImageConfigName",
        "The name of the App Image Config.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "jupyterLabImageConfig",
        "",
        sagemaker_AppImageConfigJupyterLabImageConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
