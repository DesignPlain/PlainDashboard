import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_DomainDefaultUserSettingsRSessionAppSettingsCustomImage,
  sagemaker_DomainDefaultUserSettingsRSessionAppSettingsCustomImage_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsRSessionAppSettingsCustomImage";
import {
  sagemaker_DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec,
  sagemaker_DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec_GetTypes,
} from "./sagemaker_DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec";

export interface sagemaker_DomainDefaultUserSettingsRSessionAppSettings {
  // A list of custom SageMaker images that are configured to run as a RSession app. see `custom_image` Block below.
  customImages?: Array<sagemaker_DomainDefaultUserSettingsRSessionAppSettingsCustomImage>;

  // The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block above.
  defaultResourceSpec?: sagemaker_DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec;
}

export function sagemaker_DomainDefaultUserSettingsRSessionAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "customImages",
      "A list of custom SageMaker images that are configured to run as a RSession app. see `custom_image` Block below.",
      sagemaker_DomainDefaultUserSettingsRSessionAppSettingsCustomImage_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "defaultResourceSpec",
      "The default instance type and the Amazon Resource Name (ARN) of the SageMaker image created on the instance. see `default_resource_spec` Block above.",
      sagemaker_DomainDefaultUserSettingsRSessionAppSettingsDefaultResourceSpec_GetTypes(),
      false,
      false,
    ),
  ];
}
