import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface PrivateDnsNamespaceArgs {
  // A map of tags to assign to the namespace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of VPC that you want to associate the namespace with.
  vpc?: string;

  // The description that you specify for the namespace when you create it.
  description?: string;

  // The name of the namespace.
  name?: string;
}
export class PrivateDnsNamespace extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of VPC that you want to associate the namespace with.
  public vpc?: string;

  // The ARN that Amazon Route 53 assigns to the namespace when you create it.
  public arn?: string;

  // The description that you specify for the namespace when you create it.
  public description?: string;

  // The ID for the hosted zone that Amazon Route 53 creates when you create a namespace.
  public hostedZone?: string;

  // The name of the namespace.
  public name?: string;

  // A map of tags to assign to the namespace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description that you specify for the namespace when you create it.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the namespace.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the namespace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpc",
        "The ID of VPC that you want to associate the namespace with.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
