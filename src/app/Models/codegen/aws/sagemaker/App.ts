import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_AppResourceSpec,
  sagemaker_AppResourceSpec_GetTypes,
} from '../types/sagemaker_AppResourceSpec';

export interface AppArgs {
  // The name of the space. At least one of `user_profile_name` or `space_name` required.
  spaceName?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The user profile name. At least one of `user_profile_name` or `space_name` required.
  userProfileName?: string;

  // The name of the app.
  appName?: string;

  // The type of app. Valid values are `JupyterServer`, `KernelGateway`, `RStudioServerPro`, `RSessionGateway`, `TensorBoard`, `CodeEditor`, `JupyterLab`, `DetailedProfiler`, and `Canvas`.
  appType?: string;

  // The domain ID.
  domainId?: string;

  // The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.See Resource Spec below.
  resourceSpec?: sagemaker_AppResourceSpec;
}
export class App extends DS_Resource {
  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The name of the app.
  public appName?: string;

  // The type of app. Valid values are `JupyterServer`, `KernelGateway`, `RStudioServerPro`, `RSessionGateway`, `TensorBoard`, `CodeEditor`, `JupyterLab`, `DetailedProfiler`, and `Canvas`.
  public appType?: string;

  // The Amazon Resource Name (ARN) of the app.
  public arn?: string;

  // The domain ID.
  public domainId?: string;

  // The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.See Resource Spec below.
  public resourceSpec?: sagemaker_AppResourceSpec;

  // The name of the space. At least one of `user_profile_name` or `space_name` required.
  public spaceName?: string;

  // The user profile name. At least one of `user_profile_name` or `space_name` required.
  public userProfileName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'domainId',
        'The domain ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'resourceSpec',
        'The instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance.See Resource Spec below.',
        () => sagemaker_AppResourceSpec_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'spaceName',
        'The name of the space. At least one of `user_profile_name` or `space_name` required.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'userProfileName',
        'The user profile name. At least one of `user_profile_name` or `space_name` required.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'appName',
        'The name of the app.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'appType',
        'The type of app. Valid values are `JupyterServer`, `KernelGateway`, `RStudioServerPro`, `RSessionGateway`, `TensorBoard`, `CodeEditor`, `JupyterLab`, `DetailedProfiler`, and `Canvas`.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
