import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_EipDomainNameTimeouts,
  ec2_EipDomainNameTimeouts_GetTypes,
} from "../types/ec2_EipDomainNameTimeouts";

export interface EipDomainNameArgs {
  // The allocation ID.
  allocationId?: string;

  // The domain name to modify for the IP address.
  domainName?: string;

  //
  timeouts?: ec2_EipDomainNameTimeouts;
}
export class EipDomainName extends DS_Resource {
  // The allocation ID.
  public allocationId?: string;

  // The domain name to modify for the IP address.
  public domainName?: string;

  // The DNS pointer (PTR) record for the IP address.
  public ptrRecord?: string;

  //
  public timeouts?: ec2_EipDomainNameTimeouts;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "allocationId",
        "The allocation ID.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The domain name to modify for the IP address.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => ec2_EipDomainNameTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
