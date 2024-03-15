import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CaExternalAccountKeyArgs {
  // Location for the externalAccountKey. Currently only `global` is supported.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class CaExternalAccountKey extends Resource {
  /*
Base64-URL-encoded HS256 key. It is generated by the PublicCertificateAuthorityService
when the ExternalAccountKey is created.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public B64MacKey?: string;

  /*
It is generated by the PublicCertificateAuthorityService when the ExternalAccountKey is created.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public KeyId?: string;

  // Location for the externalAccountKey. Currently only `global` is supported.
  public Location?: string;

  // Resource name. projects/{project}/locations/{location}/externalAccountKeys/{keyId}.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location for the externalAccountKey. Currently only `global` is supported.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}