import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TlsInspectionPolicyArgs {
  // The location of the tls inspection policy.
  Location?: string;

  /*
Short name of the TlsInspectionPolicy resource to be created.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A CA pool resource used to issue interception certificates.
  CaPool?: string;

  // Free-text description of the resource.
  Description?: string;

  // If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.
  ExcludePublicCaSet?: boolean;
}
export class TlsInspectionPolicy extends Resource {
  // The timestamp when the resource was created.
  public CreateTime?: string;

  // Free-text description of the resource.
  public Description?: string;

  // If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.
  public ExcludePublicCaSet?: boolean;

  // The location of the tls inspection policy.
  public Location?: string;

  /*
Short name of the TlsInspectionPolicy resource to be created.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The timestamp when the resource was updated.
  public UpdateTime?: string;

  // A CA pool resource used to issue interception certificates.
  public CaPool?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the tls inspection policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Short name of the TlsInspectionPolicy resource to be created.\n\n\n- - -",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CaPool",
        "A CA pool resource used to issue interception certificates.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Free-text description of the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ExcludePublicCaSet",
        "If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trustConfig. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trustConfig will be accepted.",
        [],
        false,
        false,
      ),
    ];
  }
}
