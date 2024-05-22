import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PrefixListReferenceArgs {
  // Identifier of EC2 Prefix List.
  prefixListId?: string;

  // Identifier of EC2 Transit Gateway Attachment.
  transitGatewayAttachmentId?: string;

  /*
Identifier of EC2 Transit Gateway Route Table.

The following arguments are optional:
*/
  transitGatewayRouteTableId?: string;

  // Indicates whether to drop traffic that matches the Prefix List. Defaults to `false`.
  blackhole?: boolean;
}
export class PrefixListReference extends Resource {
  // Indicates whether to drop traffic that matches the Prefix List. Defaults to `false`.
  public blackhole?: boolean;

  // Identifier of EC2 Prefix List.
  public prefixListId?: string;

  //
  public prefixListOwnerId?: string;

  // Identifier of EC2 Transit Gateway Attachment.
  public transitGatewayAttachmentId?: string;

  /*
Identifier of EC2 Transit Gateway Route Table.

The following arguments are optional:
*/
  public transitGatewayRouteTableId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "prefixListId",
        "Identifier of EC2 Prefix List.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayAttachmentId",
        "Identifier of EC2 Transit Gateway Attachment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayRouteTableId",
        "Identifier of EC2 Transit Gateway Route Table.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "blackhole",
        "Indicates whether to drop traffic that matches the Prefix List. Defaults to `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
