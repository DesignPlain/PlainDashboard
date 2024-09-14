import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vpc_EndpointServicePrivateDnsVerificationTimeouts,
  vpc_EndpointServicePrivateDnsVerificationTimeouts_GetTypes,
} from "../types/vpc_EndpointServicePrivateDnsVerificationTimeouts";

export interface EndpointServicePrivateDnsVerificationArgs {
  /*
ID of the endpoint service.

The following arguments are optional:
*/
  serviceId?: string;

  //
  timeouts?: vpc_EndpointServicePrivateDnsVerificationTimeouts;

  // Whether to wait until the endpoint service returns a `Verified` status for the configured private DNS name.
  waitForVerification?: boolean;
}
export class EndpointServicePrivateDnsVerification extends DS_Resource {
  //
  public timeouts?: vpc_EndpointServicePrivateDnsVerificationTimeouts;

  // Whether to wait until the endpoint service returns a `Verified` status for the configured private DNS name.
  public waitForVerification?: boolean;

  /*
ID of the endpoint service.

The following arguments are optional:
*/
  public serviceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serviceId",
        "ID of the endpoint service.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => vpc_EndpointServicePrivateDnsVerificationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "waitForVerification",
        "Whether to wait until the endpoint service returns a `Verified` status for the configured private DNS name.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
