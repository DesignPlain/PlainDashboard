import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  iot_ProvisioningTemplatePreProvisioningHook,
  iot_ProvisioningTemplatePreProvisioningHook_GetTypes,
} from "../types/iot_ProvisioningTemplatePreProvisioningHook";

export interface ProvisioningTemplateArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The JSON formatted contents of the fleet provisioning template.
  templateBody?: string;

  // The type you define in a provisioning template.
  type?: string;

  // The description of the fleet provisioning template.
  description?: string;

  // True to enable the fleet provisioning template, otherwise false.
  enabled?: boolean;

  // The name of the fleet provisioning template.
  name?: string;

  // Creates a pre-provisioning hook template. Details below.
  preProvisioningHook?: iot_ProvisioningTemplatePreProvisioningHook;

  // The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.
  provisioningRoleArn?: string;
}
export class ProvisioningTemplate extends DS_Resource {
  // The default version of the fleet provisioning template.
  public defaultVersionId?: number;

  // The JSON formatted contents of the fleet provisioning template.
  public templateBody?: string;

  // The type you define in a provisioning template.
  public type?: string;

  // Creates a pre-provisioning hook template. Details below.
  public preProvisioningHook?: iot_ProvisioningTemplatePreProvisioningHook;

  // The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.
  public provisioningRoleArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN that identifies the provisioning template.
  public arn?: string;

  // The description of the fleet provisioning template.
  public description?: string;

  // True to enable the fleet provisioning template, otherwise false.
  public enabled?: boolean;

  // The name of the fleet provisioning template.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "preProvisioningHook",
        "Creates a pre-provisioning hook template. Details below.",
        () => iot_ProvisioningTemplatePreProvisioningHook_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "provisioningRoleArn",
        "The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.",
        () => [],
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
      new DynamicUIProps(
        InputType.String,
        "templateBody",
        "The JSON formatted contents of the fleet provisioning template.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type you define in a provisioning template.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the fleet provisioning template.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "True to enable the fleet provisioning template, otherwise false.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the fleet provisioning template.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
