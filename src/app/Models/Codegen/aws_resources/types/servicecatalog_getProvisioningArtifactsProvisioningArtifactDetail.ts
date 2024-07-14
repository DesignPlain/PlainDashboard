import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicecatalog_getProvisioningArtifactsProvisioningArtifactDetail {
  // Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.
  guidance?: string;

  // The identifier of the provisioning artifact.
  id?: string;

  // The name of the provisioning artifact.
  name?: string;

  // The type of provisioning artifact.
  type?: string;

  // Indicates whether the product version is active.
  active?: boolean;

  // The UTC time stamp of the creation time.
  createdTime?: string;

  // The description of the provisioning artifact.
  description?: string;
}

export function servicecatalog_getProvisioningArtifactsProvisioningArtifactDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "active",
      "Indicates whether the product version is active.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "createdTime",
      "The UTC time stamp of the creation time.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the provisioning artifact.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "guidance",
      "Information set by the administrator to provide guidance to end users about which provisioning artifacts to use.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The identifier of the provisioning artifact.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the provisioning artifact.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of provisioning artifact.",
      [],
      true,
      false,
    ),
  ];
}
