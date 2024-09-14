import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_ProjectServiceCatalogProvisioningDetails,
  sagemaker_ProjectServiceCatalogProvisioningDetails_GetTypes,
} from "../types/sagemaker_ProjectServiceCatalogProvisioningDetails";

export interface ProjectArgs {
  // A description for the project.
  projectDescription?: string;

  // The name of the Project.
  projectName?: string;

  // The product ID and provisioning artifact ID to provision a service catalog. See Service Catalog Provisioning Details below.
  serviceCatalogProvisioningDetails?: sagemaker_ProjectServiceCatalogProvisioningDetails;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Project extends DS_Resource {
  // The ID of the project.
  public projectId?: string;

  // The name of the Project.
  public projectName?: string;

  // The product ID and provisioning artifact ID to provision a service catalog. See Service Catalog Provisioning Details below.
  public serviceCatalogProvisioningDetails?: sagemaker_ProjectServiceCatalogProvisioningDetails;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) assigned by AWS to this Project.
  public arn?: string;

  // A description for the project.
  public projectDescription?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "projectDescription",
        "A description for the project.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "projectName",
        "The name of the Project.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "serviceCatalogProvisioningDetails",
        "The product ID and provisioning artifact ID to provision a service catalog. See Service Catalog Provisioning Details below.",
        () => sagemaker_ProjectServiceCatalogProvisioningDetails_GetTypes(),
        true,
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
