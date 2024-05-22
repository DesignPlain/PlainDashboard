import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RadiusSettingsArgs {
  // The maximum number of times that communication with the RADIUS server is attempted. Minimum value of `0`. Maximum value of `10`.
  radiusRetries?: number;

  // An array of strings that contains the fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer.
  radiusServers?: Array<string>;

  // Required for enabling RADIUS on the directory.
  sharedSecret?: string;

  // Not currently used.
  useSameUsername?: boolean;

  // The amount of time, in seconds, to wait for the RADIUS server to respond. Minimum value of `1`. Maximum value of `50`.
  radiusTimeout?: number;

  // The protocol specified for your RADIUS endpoints. Valid values: `PAP`, `CHAP`, `MS-CHAPv1`, `MS-CHAPv2`.
  authenticationProtocol?: string;

  // The identifier of the directory for which you want to manager RADIUS settings.
  directoryId?: string;

  // Display label.
  displayLabel?: string;

  // The port that your RADIUS server is using for communications. Your self-managed network must allow inbound traffic over this port from the AWS Directory Service servers.
  radiusPort?: number;
}
export class RadiusSettings extends Resource {
  // The port that your RADIUS server is using for communications. Your self-managed network must allow inbound traffic over this port from the AWS Directory Service servers.
  public radiusPort?: number;

  // The maximum number of times that communication with the RADIUS server is attempted. Minimum value of `0`. Maximum value of `10`.
  public radiusRetries?: number;

  // An array of strings that contains the fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer.
  public radiusServers?: Array<string>;

  // Required for enabling RADIUS on the directory.
  public sharedSecret?: string;

  // The protocol specified for your RADIUS endpoints. Valid values: `PAP`, `CHAP`, `MS-CHAPv1`, `MS-CHAPv2`.
  public authenticationProtocol?: string;

  // The identifier of the directory for which you want to manager RADIUS settings.
  public directoryId?: string;

  // Display label.
  public displayLabel?: string;

  // The amount of time, in seconds, to wait for the RADIUS server to respond. Minimum value of `1`. Maximum value of `50`.
  public radiusTimeout?: number;

  // Not currently used.
  public useSameUsername?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "useSameUsername",
        "Not currently used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "radiusTimeout",
        "The amount of time, in seconds, to wait for the RADIUS server to respond. Minimum value of `1`. Maximum value of `50`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "The identifier of the directory for which you want to manager RADIUS settings.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "radiusPort",
        "The port that your RADIUS server is using for communications. Your self-managed network must allow inbound traffic over this port from the AWS Directory Service servers.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "radiusRetries",
        "The maximum number of times that communication with the RADIUS server is attempted. Minimum value of `0`. Maximum value of `10`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sharedSecret",
        "Required for enabling RADIUS on the directory.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayLabel",
        "Display label.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "radiusServers",
        "An array of strings that contains the fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authenticationProtocol",
        "The protocol specified for your RADIUS endpoints. Valid values: `PAP`, `CHAP`, `MS-CHAPv1`, `MS-CHAPv2`.",
        [],
        true,
        false,
      ),
    ];
  }
}
