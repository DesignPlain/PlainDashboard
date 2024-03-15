import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BackendServiceSignedUrlKeyArgs {
  /*
The backend service this signed URL key belongs.


- - -
*/
  BackendService?: string;

  /*
128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  KeyValue?: string;

  // Name of the signed URL key.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class BackendServiceSignedUrlKey extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The backend service this signed URL key belongs.


- - -
*/
  public BackendService?: string;

  /*
128-bit key value used for signing the URL. The key value must be a
valid RFC 4648 Section 5 base64url encoded string.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  public KeyValue?: string;

  // Name of the signed URL key.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "BackendService",
        "The backend service this signed URL key belongs.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "KeyValue",
        "128-bit key value used for signing the URL. The key value must be a\nvalid RFC 4648 Section 5 base64url encoded string.\n**Note**: This property is sensitive and will not be displayed in the plan.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the signed URL key.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
