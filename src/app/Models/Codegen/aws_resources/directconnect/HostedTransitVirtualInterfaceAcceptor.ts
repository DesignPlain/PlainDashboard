import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HostedTransitVirtualInterfaceAcceptorArgs {
  // The ID of the Direct Connect gateway to which to connect the virtual interface.
  dxGatewayId?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the Direct Connect virtual interface to accept.
  virtualInterfaceId?: string;
}
export class HostedTransitVirtualInterfaceAcceptor extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the Direct Connect virtual interface to accept.
  public virtualInterfaceId?: string;

  // The ARN of the virtual interface.
  public arn?: string;

  // The ID of the Direct Connect gateway to which to connect the virtual interface.
  public dxGatewayId?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dxGatewayId",
        "The ID of the Direct Connect gateway to which to connect the virtual interface.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "virtualInterfaceId",
        "The ID of the Direct Connect virtual interface to accept.",
        [],
        true,
        true,
      ),
    ];
  }
}
