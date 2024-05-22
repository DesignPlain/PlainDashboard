import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_SpaceOwnershipSettings,
  sagemaker_SpaceOwnershipSettings_GetTypes,
} from "../types/sagemaker_SpaceOwnershipSettings";
import {
  sagemaker_SpaceSpaceSettings,
  sagemaker_SpaceSpaceSettings_GetTypes,
} from "../types/sagemaker_SpaceSpaceSettings";
import {
  sagemaker_SpaceSpaceSharingSettings,
  sagemaker_SpaceSpaceSharingSettings_GetTypes,
} from "../types/sagemaker_SpaceSpaceSharingSettings";

export interface SpaceArgs {
  // A collection of space settings. See Space Settings below.
  spaceSettings?: sagemaker_SpaceSpaceSettings;

  // A collection of space sharing settings. See Space Sharing Settings below.
  spaceSharingSettings?: sagemaker_SpaceSpaceSharingSettings;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the associated Domain.
  domainId?: string;

  // A collection of ownership settings. See Ownership Settings below.
  ownershipSettings?: sagemaker_SpaceOwnershipSettings;

  // The name of the space that appears in the SageMaker Studio UI.
  spaceDisplayName?: string;

  // The name of the space.
  spaceName?: string;
}
export class Space extends Resource {
  // Returns the URL of the space. If the space is created with Amazon Web Services IAM Identity Center (Successor to Amazon Web Services Single Sign-On) authentication, users can navigate to the URL after appending the respective redirect parameter for the application type to be federated through Amazon Web Services IAM Identity Center.
  public url?: string;

  // A collection of ownership settings. See Ownership Settings below.
  public ownershipSettings?: sagemaker_SpaceOwnershipSettings;

  // The name of the space that appears in the SageMaker Studio UI.
  public spaceDisplayName?: string;

  // The name of the space.
  public spaceName?: string;

  // A collection of space sharing settings. See Space Sharing Settings below.
  public spaceSharingSettings?: sagemaker_SpaceSpaceSharingSettings;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The space's Amazon Resource Name (ARN).
  public arn?: string;

  // The ID of the associated Domain.
  public domainId?: string;

  // The ID of the space's profile in the Amazon Elastic File System volume.
  public homeEfsFileSystemUid?: string;

  // A collection of space settings. See Space Settings below.
  public spaceSettings?: sagemaker_SpaceSpaceSettings;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "spaceName",
        "The name of the space.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spaceSettings",
        "A collection of space settings. See Space Settings below.",
        sagemaker_SpaceSpaceSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spaceSharingSettings",
        "A collection of space sharing settings. See Space Sharing Settings below.",
        sagemaker_SpaceSpaceSharingSettings_GetTypes(),
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
        "domainId",
        "The ID of the associated Domain.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ownershipSettings",
        "A collection of ownership settings. See Ownership Settings below.",
        sagemaker_SpaceOwnershipSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "spaceDisplayName",
        "The name of the space that appears in the SageMaker Studio UI.",
        [],
        false,
        false,
      ),
    ];
  }
}
