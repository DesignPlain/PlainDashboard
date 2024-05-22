import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface WebsiteCertificateAuthorityAssociationArgs {
  // The ARN of the fleet.
  fleetArn?: string;

  // The root certificate of the Certificate Authority.
  certificate?: string;

  // The certificate name to display.
  displayName?: string;
}
export class WebsiteCertificateAuthorityAssociation extends Resource {
  // The certificate name to display.
  public displayName?: string;

  // The ARN of the fleet.
  public fleetArn?: string;

  // A unique identifier for the Certificate Authority.
  public websiteCaId?: string;

  // The root certificate of the Certificate Authority.
  public certificate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "fleetArn",
        "The ARN of the fleet.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "certificate",
        "The root certificate of the Certificate Authority.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The certificate name to display.",
        [],
        false,
        true,
      ),
    ];
  }
}
