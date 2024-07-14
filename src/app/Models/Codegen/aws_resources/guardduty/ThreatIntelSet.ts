import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ThreatIntelSetArgs {
  // The friendly name to identify the ThreatIntelSet.
  name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies whether GuardDuty is to start using the uploaded ThreatIntelSet.
  activate?: boolean;

  // The detector ID of the GuardDuty.
  detectorId?: string;

  // The format of the file that contains the ThreatIntelSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE`
  format?: string;

  // The URI of the file that contains the ThreatIntelSet.
  location?: string;
}
export class ThreatIntelSet extends Resource {
  // Specifies whether GuardDuty is to start using the uploaded ThreatIntelSet.
  public activate?: boolean;

  // Amazon Resource Name (ARN) of the GuardDuty ThreatIntelSet.
  public arn?: string;

  // The detector ID of the GuardDuty.
  public detectorId?: string;

  // The format of the file that contains the ThreatIntelSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE`
  public format?: string;

  // The URI of the file that contains the ThreatIntelSet.
  public location?: string;

  // The friendly name to identify the ThreatIntelSet.
  public name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "format",
        "The format of the file that contains the ThreatIntelSet. Valid values: `TXT` | `STIX` | `OTX_CSV` | `ALIEN_VAULT` | `PROOF_POINT` | `FIRE_EYE`",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The URI of the file that contains the ThreatIntelSet.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The friendly name to identify the ThreatIntelSet.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "activate",
        "Specifies whether GuardDuty is to start using the uploaded ThreatIntelSet.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "detectorId",
        "The detector ID of the GuardDuty.",
        [],
        true,
        true,
      ),
    ];
  }
}
