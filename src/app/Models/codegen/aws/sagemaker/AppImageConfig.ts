import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_AppImageConfigCodeEditorAppImageConfig,
  sagemaker_AppImageConfigCodeEditorAppImageConfig_GetTypes,
} from "../types/sagemaker_AppImageConfigCodeEditorAppImageConfig";
import {
  sagemaker_AppImageConfigJupyterLabImageConfig,
  sagemaker_AppImageConfigJupyterLabImageConfig_GetTypes,
} from "../types/sagemaker_AppImageConfigJupyterLabImageConfig";
import {
  sagemaker_AppImageConfigKernelGatewayImageConfig,
  sagemaker_AppImageConfigKernelGatewayImageConfig_GetTypes,
} from "../types/sagemaker_AppImageConfigKernelGatewayImageConfig";

export interface AppImageConfigArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the App Image Config.
  appImageConfigName?: string;

  // The CodeEditorAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in Code Editor. See Code Editor App Image Config details below.
  codeEditorAppImageConfig?: sagemaker_AppImageConfigCodeEditorAppImageConfig;

  // The JupyterLabAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in JupyterLab. See Jupyter Lab Image Config details below.
  jupyterLabImageConfig?: sagemaker_AppImageConfigJupyterLabImageConfig;

  // The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app. See Kernel Gateway Image Config details below.
  kernelGatewayImageConfig?: sagemaker_AppImageConfigKernelGatewayImageConfig;
}
export class AppImageConfig extends DS_Resource {
  // The name of the App Image Config.
  public appImageConfigName?: string;

  // The Amazon Resource Name (ARN) assigned by AWS to this App Image Config.
  public arn?: string;

  // The CodeEditorAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in Code Editor. See Code Editor App Image Config details below.
  public codeEditorAppImageConfig?: sagemaker_AppImageConfigCodeEditorAppImageConfig;

  // The JupyterLabAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in JupyterLab. See Jupyter Lab Image Config details below.
  public jupyterLabImageConfig?: sagemaker_AppImageConfigJupyterLabImageConfig;

  // The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app. See Kernel Gateway Image Config details below.
  public kernelGatewayImageConfig?: sagemaker_AppImageConfigKernelGatewayImageConfig;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "appImageConfigName",
        "The name of the App Image Config.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "codeEditorAppImageConfig",
        "The CodeEditorAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in Code Editor. See Code Editor App Image Config details below.",
        () => sagemaker_AppImageConfigCodeEditorAppImageConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "jupyterLabImageConfig",
        "The JupyterLabAppImageConfig. You can only specify one image kernel in the AppImageConfig API. This kernel is shown to users before the image starts. After the image runs, all kernels are visible in JupyterLab. See Jupyter Lab Image Config details below.",
        () => sagemaker_AppImageConfigJupyterLabImageConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "kernelGatewayImageConfig",
        "The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app. See Kernel Gateway Image Config details below.",
        () => sagemaker_AppImageConfigKernelGatewayImageConfig_GetTypes(),
        false,
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
