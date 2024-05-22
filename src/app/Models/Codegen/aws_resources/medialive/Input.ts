import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_InputVpc,
  medialive_InputVpc_GetTypes,
} from "../types/medialive_InputVpc";
import {
  medialive_InputInputDevice,
  medialive_InputInputDevice_GetTypes,
} from "../types/medialive_InputInputDevice";
import {
  medialive_InputSource,
  medialive_InputSource_GetTypes,
} from "../types/medialive_InputSource";
import {
  medialive_InputDestination,
  medialive_InputDestination_GetTypes,
} from "../types/medialive_InputDestination";
import {
  medialive_InputMediaConnectFlow,
  medialive_InputMediaConnectFlow_GetTypes,
} from "../types/medialive_InputMediaConnectFlow";

export interface InputArgs {
  // Settings for a private VPC Input. See VPC for more details.
  vpc?: medialive_InputVpc;

  // Settings for the devices. See Input Devices for more details.
  inputDevices?: Array<medialive_InputInputDevice>;

  // Name of the input.
  name?: string;

  // The source URLs for a PULL-type input. See Sources for more details.
  sources?: Array<medialive_InputSource>;

  // A map of tags to assign to the Input. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The different types of inputs that AWS Elemental MediaLive supports.

The following arguments are optional:
*/
  type?: string;

  // Destination settings for PUSH type inputs. See Destinations for more details.
  destinations?: Array<medialive_InputDestination>;

  // List of input security groups.
  inputSecurityGroups?: Array<string>;

  // A list of the MediaConnect Flows. See Media Connect Flows for more details.
  mediaConnectFlows?: Array<medialive_InputMediaConnectFlow>;

  // The ARN of the role this input assumes during and after creation.
  roleArn?: string;
}
export class Input extends Resource {
  // List of input security groups.
  public inputSecurityGroups?: Array<string>;

  // A list of the MediaConnect Flows. See Media Connect Flows for more details.
  public mediaConnectFlows?: Array<medialive_InputMediaConnectFlow>;

  // The ARN of the role this input assumes during and after creation.
  public roleArn?: string;

  // The source URLs for a PULL-type input. See Sources for more details.
  public sources?: Array<medialive_InputSource>;

  /*
The different types of inputs that AWS Elemental MediaLive supports.

The following arguments are optional:
*/
  public type?: string;

  // Destination settings for PUSH type inputs. See Destinations for more details.
  public destinations?: Array<medialive_InputDestination>;

  // A list of IDs for all Inputs which are partners of this one.
  public inputPartnerIds?: Array<string>;

  // Settings for the devices. See Input Devices for more details.
  public inputDevices?: Array<medialive_InputInputDevice>;

  // Name of the input.
  public name?: string;

  // A map of tags to assign to the Input. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ARN of the Input.
  public arn?: string;

  // The input class.
  public inputClass?: string;

  // Settings for a private VPC Input. See VPC for more details.
  public vpc?: medialive_InputVpc;

  // Source type of the input.
  public inputSourceType?: string;

  //
  public tagsAll?: Map<string, string>;

  // Channels attached to Input.
  public attachedChannels?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "inputDevices",
        "Settings for the devices. See Input Devices for more details.",
        medialive_InputInputDevice_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "inputSecurityGroups",
        "List of input security groups.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "mediaConnectFlows",
        "A list of the MediaConnect Flows. See Media Connect Flows for more details.",
        medialive_InputMediaConnectFlow_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinations",
        "Destination settings for PUSH type inputs. See Destinations for more details.",
        medialive_InputDestination_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The ARN of the role this input assumes during and after creation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpc",
        "Settings for a private VPC Input. See VPC for more details.",
        medialive_InputVpc_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the input.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sources",
        "The source URLs for a PULL-type input. See Sources for more details.",
        medialive_InputSource_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the Input. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The different types of inputs that AWS Elemental MediaLive supports.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
