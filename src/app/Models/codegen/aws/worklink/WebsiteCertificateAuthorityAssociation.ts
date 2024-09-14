import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface WebsiteCertificateAuthorityAssociationArgs {
  // The root certificate of the Certificate Authority.
  certificate?: string;

  // The certificate name to display.
  displayName?: string;

  // The ARN of the fleet.
  fleetArn?: string;
}
export class WebsiteCertificateAuthorityAssociation extends DS_Resource {
  // The root certificate of the Certificate Authority.
  public certificate?: string;

  // The certificate name to display.
  public displayName?: string;

  // The ARN of the fleet.
  public fleetArn?: string;

  // A unique identifier for the Certificate Authority.
  public websiteCaId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "certificate",
        "The root certificate of the Certificate Authority.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The certificate name to display.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "fleetArn",
        "The ARN of the fleet.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
