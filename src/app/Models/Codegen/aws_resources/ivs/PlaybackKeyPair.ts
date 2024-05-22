import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PlaybackKeyPairArgs {
  // Playback Key Pair name.
  name?: string;

  /*
Public portion of a customer-generated key pair. Must be an ECDSA public key in PEM format.

The following arguments are optional:
*/
  publicKey?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class PlaybackKeyPair extends Resource {
  // Key-pair identifier.
  public fingerprint?: string;

  // Playback Key Pair name.
  public name?: string;

  /*
Public portion of a customer-generated key pair. Must be an ECDSA public key in PEM format.

The following arguments are optional:
*/
  public publicKey?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the Playback Key Pair.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Playback Key Pair name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "publicKey",
        "Public portion of a customer-generated key pair. Must be an ECDSA public key in PEM format.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
