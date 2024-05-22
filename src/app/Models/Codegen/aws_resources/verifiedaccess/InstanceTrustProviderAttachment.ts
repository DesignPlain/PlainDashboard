import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceTrustProviderAttachmentArgs {
  // The ID of the Verified Access instance to attach the Trust Provider to.
  verifiedaccessInstanceId?: string;

  // The ID of the Verified Access trust provider.
  verifiedaccessTrustProviderId?: string;
}
export class InstanceTrustProviderAttachment extends Resource {
  // The ID of the Verified Access instance to attach the Trust Provider to.
  public verifiedaccessInstanceId?: string;

  // The ID of the Verified Access trust provider.
  public verifiedaccessTrustProviderId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "verifiedaccessInstanceId",
        "The ID of the Verified Access instance to attach the Trust Provider to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "verifiedaccessTrustProviderId",
        "The ID of the Verified Access trust provider.",
        [],
        true,
        true,
      ),
    ];
  }
}
