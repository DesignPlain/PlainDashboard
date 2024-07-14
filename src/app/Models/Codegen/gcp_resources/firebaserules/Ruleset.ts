import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  firebaserules_RulesetSource,
  firebaserules_RulesetSource_GetTypes,
} from "../types/firebaserules_RulesetSource";
import {
  firebaserules_RulesetMetadata,
  firebaserules_RulesetMetadata_GetTypes,
} from "../types/firebaserules_RulesetMetadata";

export interface RulesetArgs {
  // The project for the resource
  project?: string;

  // `Source` for the `Ruleset`.
  source?: firebaserules_RulesetSource;
}
export class Ruleset extends Resource {
  // Output only. Time the `Ruleset` was created.
  public createTime?: string;

  // Output only. The metadata for this ruleset.
  public metadatas?: Array<firebaserules_RulesetMetadata>;

  /*
File name.

- - -
*/
  public name?: string;

  // The project for the resource
  public project?: string;

  // `Source` for the `Ruleset`.
  public source?: firebaserules_RulesetSource;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "source",
        "`Source` for the `Ruleset`.",
        firebaserules_RulesetSource_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
