import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter,
  sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter_GetTypes,
} from "./sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter";

export interface sagemaker_ProjectServiceCatalogProvisioningDetails {
  // The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path.
  pathId?: string;

  // The ID of the product to provision.
  productId?: string;

  // The ID of the provisioning artifact.
  provisioningArtifactId?: string;

  // A list of key value pairs that you specify when you provision a product. See Provisioning Parameter below.
  provisioningParameters?: Array<sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter>;
}

export function sagemaker_ProjectServiceCatalogProvisioningDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pathId",
      "The path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "productId",
      "The ID of the product to provision.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "provisioningArtifactId",
      "The ID of the provisioning artifact.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "provisioningParameters",
      "A list of key value pairs that you specify when you provision a product. See Provisioning Parameter below.",
      sagemaker_ProjectServiceCatalogProvisioningDetailsProvisioningParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
