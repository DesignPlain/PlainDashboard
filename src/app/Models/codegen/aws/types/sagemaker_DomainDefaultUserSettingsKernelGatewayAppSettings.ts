import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage,
  sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage';
import {
  sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes,
} from './sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec';

export interface sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings {
  // A list of custom SageMaker images that are configured to run as a KernelGateway app. see `custom_image` Block below.
  customImages?: Array<sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.
  defaultResourceSpec?: sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;

  // The Amazon Resource Name (ARN) of the Lifecycle Configurations.
  lifecycleConfigArns?: Array<string>;
}

export function sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'customImages',
      'A list of custom SageMaker images that are configured to run as a KernelGateway app. see `custom_image` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'defaultResourceSpec',
      'The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block below.',
      () =>
        sagemaker_DomainDefaultUserSettingsKernelGatewayAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'lifecycleConfigArns',
      'The Amazon Resource Name (ARN) of the Lifecycle Configurations.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
