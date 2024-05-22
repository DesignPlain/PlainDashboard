import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  worklink_FleetIdentityProvider,
  worklink_FleetIdentityProvider_GetTypes,
} from "../types/worklink_FleetIdentityProvider";
import {
  worklink_FleetNetwork,
  worklink_FleetNetwork_GetTypes,
} from "../types/worklink_FleetNetwork";

export interface FleetArgs {
  // Provide this to allow manage the identity provider configuration for the fleet. Fields documented below.
  identityProvider?: worklink_FleetIdentityProvider;

  // A region-unique name for the AMI.
  name?: string;

  // Provide this to allow manage the company network configuration for the fleet. Fields documented below.
  network?: worklink_FleetNetwork;

  /*
The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. Defaults to `true`.

--network-- requires the following:

> --NOTE:-- `network` is cannot removed without force recreating.
*/
  optimizeForEndUserLocation?: boolean;

  // The ARN of the Amazon Kinesis data stream that receives the audit events. Kinesis data stream name must begin with `"AmazonWorkLink-"`.
  auditStreamArn?: string;

  // The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
  deviceCaCertificate?: string;

  // The name of the fleet.
  displayName?: string;
}
export class Fleet extends Resource {
  // A region-unique name for the AMI.
  public name?: string;

  // The time that the fleet was created.
  public createdTime?: string;

  // The name of the fleet.
  public displayName?: string;

  // Provide this to allow manage the identity provider configuration for the fleet. Fields documented below.
  public identityProvider?: worklink_FleetIdentityProvider;

  // The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
  public deviceCaCertificate?: string;

  // The time that the fleet was last updated.
  public lastUpdatedTime?: string;

  // Provide this to allow manage the company network configuration for the fleet. Fields documented below.
  public network?: worklink_FleetNetwork;

  /*
The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. Defaults to `true`.

--network-- requires the following:

> --NOTE:-- `network` is cannot removed without force recreating.
*/
  public optimizeForEndUserLocation?: boolean;

  // The ARN of the created WorkLink Fleet.
  public arn?: string;

  // The ARN of the Amazon Kinesis data stream that receives the audit events. Kinesis data stream name must begin with `"AmazonWorkLink-"`.
  public auditStreamArn?: string;

  // The identifier used by users to sign in to the Amazon WorkLink app.
  public companyCode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The name of the fleet.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "identityProvider",
        "Provide this to allow manage the identity provider configuration for the fleet. Fields documented below.",
        worklink_FleetIdentityProvider_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A region-unique name for the AMI.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "network",
        "Provide this to allow manage the company network configuration for the fleet. Fields documented below.",
        worklink_FleetNetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "optimizeForEndUserLocation",
        "The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region. Defaults to `true`.\n\n**network** requires the following:\n\n> **NOTE:** `network` is cannot removed without force recreating.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "auditStreamArn",
        'The ARN of the Amazon Kinesis data stream that receives the audit events. Kinesis data stream name must begin with `"AmazonWorkLink-"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deviceCaCertificate",
        "The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.",
        [],
        false,
        false,
      ),
    ];
  }
}
