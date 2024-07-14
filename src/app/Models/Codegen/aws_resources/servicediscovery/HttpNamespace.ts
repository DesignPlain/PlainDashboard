import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface HttpNamespaceArgs {
  // The name of the http namespace.
  name?: string;

  // A map of tags to assign to the namespace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The description that you specify for the namespace when you create it.
  description?: string;
}
export class HttpNamespace extends Resource {
  // The ARN that Amazon Route 53 assigns to the namespace when you create it.
  public arn?: string;

  // The description that you specify for the namespace when you create it.
  public description?: string;

  // The name of an HTTP namespace.
  public httpName?: string;

  // The name of the http namespace.
  public name?: string;

  // A map of tags to assign to the namespace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the namespace. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description that you specify for the namespace when you create it.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the http namespace.",
        [],
        false,
        true,
      ),
    ];
  }
}
