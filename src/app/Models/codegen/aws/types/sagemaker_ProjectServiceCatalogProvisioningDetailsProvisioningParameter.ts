import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter {
  // The key that identifies a provisioning parameter.
  key?: string;

  // The value of the provisioning parameter.
  value?: string;
}

export function sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key that identifies a provisioning parameter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the provisioning parameter.",
      () => [],
      false,
      false,
    ),
  ];
}
